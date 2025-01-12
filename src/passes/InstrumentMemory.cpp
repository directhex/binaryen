/*
 * Copyright 2017 WebAssembly Community Group participants
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//
// Instruments the build with code to intercept all memory reads and writes.
// This can be useful in building tools that analyze memory access behaviour.
//
//  Before:
//   (i32.load8_s align=1 offset=2 (i32.const 3))
//
//  After:
//   (call $load_val_i32
//    (i32.const n) // ID
//    (i32.load8_s align=1 offset=2
//     (call $load_ptr
//      (i32.const n) // ID
//      (i32.const 1) // bytes
//      (i32.const 2) // offset
//      (i32.const 3) // address
//     )
//    )
//   )
// Stores: store(id, bytes, offset, address) => address
//
//  Before:
//   (i32.store8 align=1 offset=2 (i32.const 3) (i32.const 4))
//
//  After:
//   (i32.store16 align=1 offset=2
//    (call $store_ptr
//     (i32.const n) // ID
//     (i32.const 1) // bytes
//     (i32.const 2) // offset
//     (i32.const 3) // address
//    )
//    (call $store_val_i32
//     (i32.const n) // ID
//     (i32.const 4)
//    )
//   )

#include <wasm.h>
#include <wasm-builder.h>
#include <pass.h>
#include "shared-constants.h"
#include "asmjs/shared-constants.h"
#include "asm_v_wasm.h"
#include "ir/function-type-utils.h"

namespace wasm {

static Name load_ptr("load_ptr"),
            load_val_i32("load_val_i32"),
            load_val_i64("load_val_i64"),
            load_val_f32("load_val_f32"),
            load_val_f64("load_val_f64"),
            store_ptr("store_ptr"),
            store_val_i32("store_val_i32"),
            store_val_i64("store_val_i64"),
            store_val_f32("store_val_f32"),
            store_val_f64("store_val_f64");

// TODO: Add support for atomicRMW/cmpxchg

struct InstrumentMemory : public WalkerPass<PostWalker<InstrumentMemory>> {
  void visitLoad(Load* curr) {
    id++;
    Builder builder(*getModule());
    curr->ptr = builder.makeCall(load_ptr,
      {
        builder.makeConst(Literal(int32_t(id))),
        builder.makeConst(Literal(int32_t(curr->bytes))),
        builder.makeConst(Literal(int32_t(curr->offset.addr))),
        curr->ptr
      },
      i32
    );
    Name target;
    switch (curr->type) {
      case i32: target = load_val_i32; break;
      case i64: target = load_val_i64; break;
      case f32: target = load_val_f32; break;
      case f64: target = load_val_f64; break;
      default: return; // TODO: other types, unreachable, etc.
    }
    replaceCurrent(builder.makeCall(target,
      {
        builder.makeConst(Literal(int32_t(id))),
        curr
      },
      curr->type
    ));
  }

  void visitStore(Store* curr) {
    id++;
    Builder builder(*getModule());
    curr->ptr = builder.makeCall(store_ptr,
      { builder.makeConst(Literal(int32_t(id))),
        builder.makeConst(Literal(int32_t(curr->bytes))),
        builder.makeConst(Literal(int32_t(curr->offset.addr))),
        curr->ptr },
      i32
    );
    Name target;
    switch (curr->value->type) {
      case i32: target = store_val_i32; break;
      case i64: target = store_val_i64; break;
      case f32: target = store_val_f32; break;
      case f64: target = store_val_f64; break;
      default: return; // TODO: other types, unreachable, etc.
    }
    curr->value = builder.makeCall(target, 
      {
        builder.makeConst(Literal(int32_t(id))),
        curr->value
      },
      curr->value->type
    );
  }

  void visitModule(Module *curr) {
    addImport(curr, load_ptr,      "iiiii");
    addImport(curr, load_val_i32,  "iii");
    addImport(curr, load_val_i64,  "jij");
    addImport(curr, load_val_f32,  "fif");
    addImport(curr, load_val_f64,  "did");
    addImport(curr, store_ptr,     "iiiii");
    addImport(curr, store_val_i32, "iii");
    addImport(curr, store_val_i64, "jij");
    addImport(curr, store_val_f32, "fif");
    addImport(curr, store_val_f64, "did");
  }

private:
  Index id;

  void addImport(Module *curr, Name name, std::string sig) {
    auto import = new Function;
    import->name = name;
    import->module = ENV;
    import->base = name;
    auto* functionType = ensureFunctionType(sig, curr);
    import->type = functionType->name;
    FunctionTypeUtils::fillFunction(import, functionType);
    curr->addFunction(import);
  }
};

Pass *createInstrumentMemoryPass() {
  return new InstrumentMemory();
}

} // namespace wasm
