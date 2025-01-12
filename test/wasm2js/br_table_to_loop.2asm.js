
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
 function $0() {
  block : {
   loop : do {
    switch (1 | 0) {
    case 0:
     break block;
    case 1:
     continue loop;
    default:
     break block;
    };
    break loop;
   } while (1);
  }
 }
 
 function $1() {
  block : {
   loop : do {
    switch (1 | 0) {
    case 0:
     continue loop;
    case 1:
     break block;
    default:
     continue loop;
    };
    break loop;
   } while (1);
  }
 }
 
 var FUNCTION_TABLE = [];
 return {
  "exp1": $0, 
  "exp2": $1
 };
}

var memasmFunc = new ArrayBuffer(65536);
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); }},memasmFunc);
export var exp1 = retasmFunc.exp1;
export var exp2 = retasmFunc.exp2;
