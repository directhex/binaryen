import { setTempRet0 } from 'env';

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
  var $0_1 = 0;
  return $0_1 | 0;
 }
 
 function $1() {
  var i64toi32_i32$0 = 0, $0$hi = 0, $0_1 = 0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return $0_1 | 0;
 }
 
 function $2() {
  var $0_1 = Math_fround(0);
  return Math_fround($0_1);
 }
 
 function $3() {
  var $0_1 = 0.0;
  return +$0_1;
 }
 
 function $4($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $5($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$0 = 0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return $0_1 | 0;
 }
 
 function $6($0_1) {
  $0_1 = Math_fround($0_1);
  return Math_fround($0_1);
 }
 
 function $7($0_1) {
  $0_1 = +$0_1;
  return +$0_1;
 }
 
 function $8($0_1, $0$hi, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = Math_fround($1_1);
  $2_1 = +$2_1;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var i64toi32_i32$0 = 0, $5_1 = Math_fround(0), $6$hi = 0, $6_1 = 0, $7$hi = 0, $7_1 = 0, $8_1 = 0.0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$0 = $6$hi;
  i64toi32_i32$0 = $7$hi;
 }
 
 function $9($0_1, $0$hi, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = Math_fround($1_1);
  $2_1 = +$2_1;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $6$hi = 0, $10 = 0.0, $21 = 0.0, $7$hi = 0, $7_1 = 0;
  i64toi32_i32$0 = 0;
  $6$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $0_1;
  $10 = +(i64toi32_i32$1 >>> 0) + 4294967296.0 * +(i64toi32_i32$0 >>> 0);
  i64toi32_i32$0 = $6$hi;
  i64toi32_i32$1 = 6;
  $21 = +(i64toi32_i32$1 >>> 0) + 4294967296.0 * +(i64toi32_i32$0 >>> 0);
  i64toi32_i32$0 = $7$hi;
  i64toi32_i32$1 = $7_1;
  return +($10 + (+$1_1 + ($2_1 + (+($3_1 >>> 0) + (+($4_1 | 0) + (+Math_fround(5.5) + ($21 + (+(i64toi32_i32$1 >>> 0) + 4294967296.0 * +(i64toi32_i32$0 >>> 0) + 8.0))))))));
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
 
 function legalstub$5($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12 = 0, $13 = 0, $4_1 = 0, $4$hi = 0, $7$hi = 0, $2_1 = 0, $2$hi = 0;
  i64toi32_i32$0 = 0;
  $4_1 = $0_1;
  $4$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    $12 = 0;
   }
  } else {
   {
    i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
    $12 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
  }
  $7$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $4$hi;
  i64toi32_i32$0 = $4_1;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$3 = $12;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = $5(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $2_1 = i64toi32_i32$2;
  $2$hi = i64toi32_i32$0;
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$2 = 0;
    $13 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    $13 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  setTempRet0($13 | 0);
  i64toi32_i32$2 = $2$hi;
  return $2_1 | 0;
 }
 
 function legalstub$6($0_1) {
  $0_1 = +$0_1;
  return +(+Math_fround($6(Math_fround(Math_fround($0_1)))));
 }
 
 function legalstub$8($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  $3_1 = +$3_1;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $14 = 0, $7_1 = 0, $7$hi = 0, $10$hi = 0;
  i64toi32_i32$0 = 0;
  $7_1 = $0_1;
  $7$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    $14 = 0;
   }
  } else {
   {
    i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
    $14 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
  }
  $10$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $7$hi;
  i64toi32_i32$0 = $7_1;
  i64toi32_i32$2 = $10$hi;
  i64toi32_i32$3 = $14;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $8(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0, Math_fround(Math_fround($2_1)), +$3_1, $4_1 | 0, $5_1 | 0);
 }
 
 function legalstub$9($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  $3_1 = +$3_1;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $14 = 0, $7_1 = 0, $7$hi = 0, $10$hi = 0;
  i64toi32_i32$0 = 0;
  $7_1 = $0_1;
  $7$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    $14 = 0;
   }
  } else {
   {
    i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
    $14 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
  }
  $10$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $7$hi;
  i64toi32_i32$0 = $7_1;
  i64toi32_i32$2 = $10$hi;
  i64toi32_i32$3 = $14;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  return +(+$9(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0, Math_fround(Math_fround($2_1)), +$3_1, $4_1 | 0, $5_1 | 0));
 }
 
 var FUNCTION_TABLE = [];
 return {
  "type_local_i32": $0, 
  "type_local_i64": legalstub$1, 
  "type_local_f32": legalstub$2, 
  "type_local_f64": $3, 
  "type_param_i32": $4, 
  "type_param_i64": legalstub$5, 
  "type_param_f32": legalstub$6, 
  "type_param_f64": $7, 
  "type_mixed": legalstub$8, 
  "read": legalstub$9
 };
}

var memasmFunc = new ArrayBuffer(65536);
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },setTempRet0},memasmFunc);
export var type_local_i32 = retasmFunc.type_local_i32;
export var type_local_i64 = retasmFunc.type_local_i64;
export var type_local_f32 = retasmFunc.type_local_f32;
export var type_local_f64 = retasmFunc.type_local_f64;
export var type_param_i32 = retasmFunc.type_param_i32;
export var type_param_i64 = retasmFunc.type_param_i64;
export var type_param_f32 = retasmFunc.type_param_f32;
export var type_param_f64 = retasmFunc.type_param_f64;
export var type_mixed = retasmFunc.type_mixed;
export var read = retasmFunc.read;
