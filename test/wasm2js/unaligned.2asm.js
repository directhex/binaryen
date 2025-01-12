import { setTempRet0 } from 'env';


  var scratchBuffer = new ArrayBuffer(8);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_scratch_load_i32(index) {
    return i32ScratchView[index];
  }
      
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f64() {
    return f64ScratchView[0];
  }
      
  function wasm2js_scratch_store_f64(value) {
    f64ScratchView[0] = value;
  }
      
  function wasm2js_scratch_load_f32() {
    return f32ScratchView[0];
  }
      
  function wasm2js_scratch_store_f32(value) {
    f32ScratchView[0] = value;
  }
      
function asmFunc(global, env, buffer) {
 "almost asm";
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 var setTempRet0 = env.setTempRet0;
 var i64toi32_i32$HIGH_BITS = 0;
 function $0() {
  var wasm2js_i32$0 = 0;
  return (wasm2js_i32$0 = 0, HEAPU8[wasm2js_i32$0 >> 0] | 0 | 0 | (HEAPU8[(wasm2js_i32$0 + 1 | 0) >> 0] | 0 | 0) << 8 | (HEAPU8[(wasm2js_i32$0 + 2 | 0) >> 0] | 0 | 0) << 16 | (HEAPU8[(wasm2js_i32$0 + 3 | 0) >> 0] | 0 | 0) << 24) | 0;
 }
 
 function $1() {
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, wasm2js_i32$0 = 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = (wasm2js_i32$0 = i64toi32_i32$2, HEAPU8[wasm2js_i32$0 >> 0] | 0 | 0 | (HEAPU8[(wasm2js_i32$0 + 1 | 0) >> 0] | 0 | 0) << 8 | (HEAPU8[(wasm2js_i32$0 + 2 | 0) >> 0] | 0 | 0) << 16 | (HEAPU8[(wasm2js_i32$0 + 3 | 0) >> 0] | 0 | 0) << 24);
  i64toi32_i32$1 = (wasm2js_i32$0 = i64toi32_i32$2, HEAPU8[(wasm2js_i32$0 + 4 | 0) >> 0] | 0 | 0 | (HEAPU8[(wasm2js_i32$0 + 5 | 0) >> 0] | 0 | 0) << 8 | (HEAPU8[(wasm2js_i32$0 + 6 | 0) >> 0] | 0 | 0) << 16 | (HEAPU8[(wasm2js_i32$0 + 7 | 0) >> 0] | 0 | 0) << 24);
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $2() {
  var wasm2js_i32$0 = 0;
  return Math_fround((wasm2js_scratch_store_i32(0, (wasm2js_i32$0 = 0, HEAPU8[wasm2js_i32$0 >> 0] | 0 | 0 | (HEAPU8[(wasm2js_i32$0 + 1 | 0) >> 0] | 0 | 0) << 8 | (HEAPU8[(wasm2js_i32$0 + 2 | 0) >> 0] | 0 | 0) << 16 | (HEAPU8[(wasm2js_i32$0 + 3 | 0) >> 0] | 0 | 0) << 24)), wasm2js_scratch_load_f32()));
 }
 
 function $3() {
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, wasm2js_i32$0 = 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = (wasm2js_i32$0 = i64toi32_i32$2, HEAPU8[(wasm2js_i32$0 + 4 | 0) >> 0] | 0 | 0 | (HEAPU8[(wasm2js_i32$0 + 5 | 0) >> 0] | 0 | 0) << 8 | (HEAPU8[(wasm2js_i32$0 + 6 | 0) >> 0] | 0 | 0) << 16 | (HEAPU8[(wasm2js_i32$0 + 7 | 0) >> 0] | 0 | 0) << 24);
  wasm2js_scratch_store_i32(0 | 0, (wasm2js_i32$0 = i64toi32_i32$2, HEAPU8[wasm2js_i32$0 >> 0] | 0 | 0 | (HEAPU8[(wasm2js_i32$0 + 1 | 0) >> 0] | 0 | 0) << 8 | (HEAPU8[(wasm2js_i32$0 + 2 | 0) >> 0] | 0 | 0) << 16 | (HEAPU8[(wasm2js_i32$0 + 3 | 0) >> 0] | 0 | 0) << 24) | 0);
  wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$1 | 0);
  return +(+wasm2js_scratch_load_f64());
 }
 
 function $4() {
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  (wasm2js_i32$0 = 0, wasm2js_i32$1 = 0), ((HEAP8[wasm2js_i32$0 >> 0] = wasm2js_i32$1 & 255 | 0, HEAP8[(wasm2js_i32$0 + 1 | 0) >> 0] = (wasm2js_i32$1 >>> 8 | 0) & 255 | 0), HEAP8[(wasm2js_i32$0 + 2 | 0) >> 0] = (wasm2js_i32$1 >>> 16 | 0) & 255 | 0), HEAP8[(wasm2js_i32$0 + 3 | 0) >> 0] = (wasm2js_i32$1 >>> 24 | 0) & 255 | 0;
 }
 
 function $5() {
  var i64toi32_i32$1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  i64toi32_i32$1 = 0;
  (wasm2js_i32$0 = i64toi32_i32$1, wasm2js_i32$1 = 0), ((HEAP8[wasm2js_i32$0 >> 0] = wasm2js_i32$1 & 255 | 0, HEAP8[(wasm2js_i32$0 + 1 | 0) >> 0] = (wasm2js_i32$1 >>> 8 | 0) & 255 | 0), HEAP8[(wasm2js_i32$0 + 2 | 0) >> 0] = (wasm2js_i32$1 >>> 16 | 0) & 255 | 0), HEAP8[(wasm2js_i32$0 + 3 | 0) >> 0] = (wasm2js_i32$1 >>> 24 | 0) & 255 | 0;
  (wasm2js_i32$0 = i64toi32_i32$1, wasm2js_i32$1 = 0), ((HEAP8[(wasm2js_i32$0 + 4 | 0) >> 0] = wasm2js_i32$1 & 255 | 0, HEAP8[(wasm2js_i32$0 + 5 | 0) >> 0] = (wasm2js_i32$1 >>> 8 | 0) & 255 | 0), HEAP8[(wasm2js_i32$0 + 6 | 0) >> 0] = (wasm2js_i32$1 >>> 16 | 0) & 255 | 0), HEAP8[(wasm2js_i32$0 + 7 | 0) >> 0] = (wasm2js_i32$1 >>> 24 | 0) & 255 | 0;
 }
 
 function $6() {
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  (wasm2js_i32$0 = 0, wasm2js_i32$1 = (wasm2js_scratch_store_f32(Math_fround(0.0)), wasm2js_scratch_load_i32(0))), ((HEAP8[wasm2js_i32$0 >> 0] = wasm2js_i32$1 & 255 | 0, HEAP8[(wasm2js_i32$0 + 1 | 0) >> 0] = (wasm2js_i32$1 >>> 8 | 0) & 255 | 0), HEAP8[(wasm2js_i32$0 + 2 | 0) >> 0] = (wasm2js_i32$1 >>> 16 | 0) & 255 | 0), HEAP8[(wasm2js_i32$0 + 3 | 0) >> 0] = (wasm2js_i32$1 >>> 24 | 0) & 255 | 0;
 }
 
 function $7() {
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  wasm2js_scratch_store_f64(+(0.0));
  i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
  i64toi32_i32$1 = 0;
  (wasm2js_i32$0 = i64toi32_i32$1, wasm2js_i32$1 = wasm2js_scratch_load_i32(0 | 0) | 0), ((HEAP8[wasm2js_i32$0 >> 0] = wasm2js_i32$1 & 255 | 0, HEAP8[(wasm2js_i32$0 + 1 | 0) >> 0] = (wasm2js_i32$1 >>> 8 | 0) & 255 | 0), HEAP8[(wasm2js_i32$0 + 2 | 0) >> 0] = (wasm2js_i32$1 >>> 16 | 0) & 255 | 0), HEAP8[(wasm2js_i32$0 + 3 | 0) >> 0] = (wasm2js_i32$1 >>> 24 | 0) & 255 | 0;
  (wasm2js_i32$0 = i64toi32_i32$1, wasm2js_i32$1 = i64toi32_i32$0), ((HEAP8[(wasm2js_i32$0 + 4 | 0) >> 0] = wasm2js_i32$1 & 255 | 0, HEAP8[(wasm2js_i32$0 + 5 | 0) >> 0] = (wasm2js_i32$1 >>> 8 | 0) & 255 | 0), HEAP8[(wasm2js_i32$0 + 6 | 0) >> 0] = (wasm2js_i32$1 >>> 16 | 0) & 255 | 0), HEAP8[(wasm2js_i32$0 + 7 | 0) >> 0] = (wasm2js_i32$1 >>> 24 | 0) & 255 | 0;
 }
 
 function legalstub$1() {
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $7_1 = 0, $0_1 = 0, $0$hi = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = $1() | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $0_1 = i64toi32_i32$0;
  $0$hi = i64toi32_i32$1;
  i64toi32_i32$2 = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$0 = 0;
    $7_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$0 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $7_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  setTempRet0($7_1 | 0);
  i64toi32_i32$0 = $0$hi;
  return $0_1 | 0;
 }
 
 function legalstub$2() {
  return +(+Math_fround($2()));
 }
 
 var FUNCTION_TABLE = [];
 return {
  "i32_load": $0, 
  "i64_load": legalstub$1, 
  "f32_load": legalstub$2, 
  "f64_load": $3, 
  "i32_store": $4, 
  "i64_store": $5, 
  "f32_store": $6, 
  "f64_store": $7
 };
}

var memasmFunc = new ArrayBuffer(65536);
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },setTempRet0},memasmFunc);
export var i32_load = retasmFunc.i32_load;
export var i64_load = retasmFunc.i64_load;
export var f32_load = retasmFunc.f32_load;
export var f64_load = retasmFunc.f64_load;
export var i32_store = retasmFunc.i32_store;
export var i64_store = retasmFunc.i64_store;
export var f32_store = retasmFunc.f32_store;
export var f64_store = retasmFunc.f64_store;
