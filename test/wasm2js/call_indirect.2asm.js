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
 function const_i32() {
  return 306 | 0;
 }
 
 function const_i64() {
  i64toi32_i32$HIGH_BITS = 0;
  return 356 | 0;
 }
 
 function const_f32() {
  return Math_fround(Math_fround(3890.0));
 }
 
 function const_f64() {
  return +(3940.0);
 }
 
 function id_i32($0) {
  $0 = $0 | 0;
  return $0 | 0;
 }
 
 function id_i64($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$0 = 0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return $0 | 0;
 }
 
 function id_f32($0) {
  $0 = Math_fround($0);
  return Math_fround($0);
 }
 
 function id_f64($0) {
  $0 = +$0;
  return +$0;
 }
 
 function i32_i64($0, $1, $1$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  var i64toi32_i32$0 = 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return $1 | 0;
 }
 
 function i64_f64($0, $0$hi, $1) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  $1 = +$1;
  return +$1;
 }
 
 function f32_i32($0, $1) {
  $0 = Math_fround($0);
  $1 = $1 | 0;
  return $1 | 0;
 }
 
 function f64_f32($0, $1) {
  $0 = +$0;
  $1 = Math_fround($1);
  return Math_fround($1);
 }
 
 function over_i32_duplicate($0) {
  $0 = $0 | 0;
  return $0 | 0;
 }
 
 function over_i64_duplicate($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$0 = 0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return $0 | 0;
 }
 
 function over_f32_duplicate($0) {
  $0 = Math_fround($0);
  return Math_fround($0);
 }
 
 function over_f64_duplicate($0) {
  $0 = +$0;
  return +$0;
 }
 
 function $16() {
  var wasm2js_i32$0 = 0;
  return (wasm2js_i32$0 = 0, FUNCTION_TABLE[wasm2js_i32$0]() | 0) | 0;
 }
 
 function $17() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, wasm2js_i32$0 = 0;
  i64toi32_i32$0 = (wasm2js_i32$0 = 1, FUNCTION_TABLE[wasm2js_i32$0]() | 0);
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $18() {
  var wasm2js_i32$0 = 0;
  return Math_fround((wasm2js_i32$0 = 2, Math_fround(FUNCTION_TABLE[wasm2js_i32$0]())));
 }
 
 function $19() {
  var wasm2js_i32$0 = 0;
  return +(wasm2js_i32$0 = 3, +FUNCTION_TABLE[wasm2js_i32$0]());
 }
 
 function $20() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$0 = (((wasm2js_i32$1 = 100, wasm2js_i32$2 = i64toi32_i32$0), wasm2js_i32$0 = 5), FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$1 | 0, wasm2js_i32$2 | 0) | 0);
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $21() {
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  return ((wasm2js_i32$1 = 32, wasm2js_i32$0 = 4), FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$1 | 0) | 0) | 0;
 }
 
 function $22() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$0 = (((wasm2js_i32$1 = 64, wasm2js_i32$2 = i64toi32_i32$0), wasm2js_i32$0 = 5), FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$1 | 0, wasm2js_i32$2 | 0) | 0);
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $23() {
  var wasm2js_i32$0 = 0, wasm2js_f32$0 = Math_fround(0);
  return Math_fround(((wasm2js_f32$0 = Math_fround(1.3200000524520874), wasm2js_i32$0 = 6), Math_fround(FUNCTION_TABLE[wasm2js_i32$0](Math_fround(wasm2js_f32$0)))));
 }
 
 function $24() {
  var wasm2js_i32$0 = 0, wasm2js_f64$0 = 0.0;
  return +((wasm2js_f64$0 = 1.64, wasm2js_i32$0 = 7), +FUNCTION_TABLE[wasm2js_i32$0](+wasm2js_f64$0));
 }
 
 function $25() {
  var wasm2js_i32$0 = 0, wasm2js_f32$0 = Math_fround(0), wasm2js_i32$1 = 0;
  return (((wasm2js_f32$0 = Math_fround(32.099998474121094), wasm2js_i32$1 = 32), wasm2js_i32$0 = 8), FUNCTION_TABLE[wasm2js_i32$0](Math_fround(wasm2js_f32$0), wasm2js_i32$1 | 0) | 0) | 0;
 }
 
 function $26() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0, wasm2js_i32$3 = 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$0 = ((((wasm2js_i32$1 = 32, wasm2js_i32$2 = 64), wasm2js_i32$3 = i64toi32_i32$0), wasm2js_i32$0 = 9), FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$1 | 0, wasm2js_i32$2 | 0, wasm2js_i32$3 | 0) | 0);
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $27() {
  var wasm2js_i32$0 = 0, wasm2js_f64$0 = 0.0, wasm2js_f32$0 = Math_fround(0);
  return Math_fround((((wasm2js_f64$0 = 64.0, wasm2js_f32$0 = Math_fround(32.0)), wasm2js_i32$0 = 10), Math_fround(FUNCTION_TABLE[wasm2js_i32$0](+wasm2js_f64$0, Math_fround(wasm2js_f32$0)))));
 }
 
 function $28() {
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0, wasm2js_f64$0 = 0.0;
  return +((((wasm2js_i32$1 = 64, wasm2js_i32$2 = 0), wasm2js_f64$0 = 64.1), wasm2js_i32$0 = 11), +FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$1 | 0, wasm2js_i32$2 | 0, +wasm2js_f64$0));
 }
 
 function $29($0, $1, $1$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$0 = (((wasm2js_i32$1 = $1, wasm2js_i32$2 = i64toi32_i32$0), wasm2js_i32$0 = $0), FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$1 | 0, wasm2js_i32$2 | 0) | 0);
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $30($0) {
  $0 = $0 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$0 = (((wasm2js_i32$1 = 9, wasm2js_i32$2 = i64toi32_i32$0), wasm2js_i32$0 = $0), FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$1 | 0, wasm2js_i32$2 | 0) | 0);
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function fac($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$5 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, $8 = 0, $8$hi = 0, i64toi32_i32$3 = 0, $6 = 0, $6$hi = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  i64toi32_i32$0 = $0$hi;
  if (($0 | i64toi32_i32$0 | 0 | 0) == (0 | 0)) {
   {
    i64toi32_i32$0 = 0;
    $8 = 1;
    $8$hi = i64toi32_i32$0;
   }
  } else {
   {
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$2 = $0;
    i64toi32_i32$3 = 1;
    i64toi32_i32$5 = (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) + 0 | 0;
    i64toi32_i32$5 = i64toi32_i32$0 - i64toi32_i32$5 | 0;
    i64toi32_i32$5 = (((wasm2js_i32$1 = i64toi32_i32$2 - i64toi32_i32$3 | 0, wasm2js_i32$2 = i64toi32_i32$5), wasm2js_i32$0 = 12), FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$1 | 0, wasm2js_i32$2 | 0) | 0);
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $6 = i64toi32_i32$5;
    $6$hi = i64toi32_i32$2;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$5 = $6$hi;
    i64toi32_i32$5 = __wasm_i64_mul($0 | 0, i64toi32_i32$0 | 0, $6 | 0, i64toi32_i32$5 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $8 = i64toi32_i32$5;
    $8$hi = i64toi32_i32$2;
   }
  }
  i64toi32_i32$2 = $8$hi;
  i64toi32_i32$5 = $8;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
  return i64toi32_i32$5 | 0;
 }
 
 function fib($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$5 = 0, i64toi32_i32$4 = 0, i64toi32_i32$6 = 0, $10 = 0, $10$hi = 0, $5 = 0, $5$hi = 0, $8 = 0, $8$hi = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 1;
  if (i64toi32_i32$0 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 <= i64toi32_i32$3 >>> 0 | 0) | 0) {
   {
    i64toi32_i32$2 = 0;
    $10 = 1;
    $10$hi = i64toi32_i32$2;
   }
  } else {
   {
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$3 = $0;
    i64toi32_i32$0 = 0;
    i64toi32_i32$1 = 2;
    i64toi32_i32$4 = i64toi32_i32$3 - i64toi32_i32$1 | 0;
    i64toi32_i32$6 = i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0;
    i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$0 | 0;
    i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
    i64toi32_i32$5 = (((wasm2js_i32$1 = i64toi32_i32$4, wasm2js_i32$2 = i64toi32_i32$5), wasm2js_i32$0 = 13), FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$1 | 0, wasm2js_i32$2 | 0) | 0);
    i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
    $5 = i64toi32_i32$5;
    $5$hi = i64toi32_i32$3;
    i64toi32_i32$3 = i64toi32_i32$2;
    i64toi32_i32$3 = i64toi32_i32$2;
    i64toi32_i32$2 = $0;
    i64toi32_i32$5 = 0;
    i64toi32_i32$1 = 1;
    i64toi32_i32$0 = i64toi32_i32$2 - i64toi32_i32$1 | 0;
    i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$1 >>> 0;
    i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$5 | 0;
    i64toi32_i32$4 = i64toi32_i32$3 - i64toi32_i32$4 | 0;
    i64toi32_i32$4 = (((wasm2js_i32$2 = i64toi32_i32$0, wasm2js_i32$1 = i64toi32_i32$4), wasm2js_i32$0 = 13), FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$2 | 0, wasm2js_i32$1 | 0) | 0);
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $8 = i64toi32_i32$4;
    $8$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $5$hi;
    i64toi32_i32$3 = $5;
    i64toi32_i32$4 = $8$hi;
    i64toi32_i32$1 = $8;
    i64toi32_i32$5 = i64toi32_i32$3 + i64toi32_i32$1 | 0;
    i64toi32_i32$0 = i64toi32_i32$2 + i64toi32_i32$4 | 0;
    if (i64toi32_i32$5 >>> 0 < i64toi32_i32$1 >>> 0) {
     i64toi32_i32$0 = i64toi32_i32$0 + 1 | 0
    }
    $10 = i64toi32_i32$5;
    $10$hi = i64toi32_i32$0;
   }
  }
  i64toi32_i32$0 = $10$hi;
  i64toi32_i32$3 = $10;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$3 | 0;
 }
 
 function even($0) {
  $0 = $0 | 0;
  var $6 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  if (($0 | 0) == (0 | 0)) {
   $6 = 44
  } else {
   $6 = ((wasm2js_i32$1 = $0 - 1 | 0, wasm2js_i32$0 = 15), FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$1 | 0) | 0)
  }
  return $6 | 0;
 }
 
 function odd($0) {
  $0 = $0 | 0;
  var $6 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  if (($0 | 0) == (0 | 0)) {
   $6 = 99
  } else {
   $6 = ((wasm2js_i32$1 = $0 - 1 | 0, wasm2js_i32$0 = 14), FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$1 | 0) | 0)
  }
  return $6 | 0;
 }
 
 function runaway() {
  var wasm2js_i32$0 = 0;
  wasm2js_i32$0 = 16, FUNCTION_TABLE[wasm2js_i32$0]();
 }
 
 function mutual_runaway1() {
  var wasm2js_i32$0 = 0;
  wasm2js_i32$0 = 18, FUNCTION_TABLE[wasm2js_i32$0]();
 }
 
 function mutual_runaway2() {
  var wasm2js_i32$0 = 0;
  wasm2js_i32$0 = 17, FUNCTION_TABLE[wasm2js_i32$0]();
 }
 
 function legalstub$17() {
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $7 = 0, $0 = 0, $0$hi = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = $17() | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $0 = i64toi32_i32$0;
  $0$hi = i64toi32_i32$1;
  i64toi32_i32$2 = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$0 = 0;
    $7 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$0 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $7 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  setTempRet0($7 | 0);
  i64toi32_i32$0 = $0$hi;
  return $0 | 0;
 }
 
 function legalstub$18() {
  return +(+Math_fround($18()));
 }
 
 function legalstub$20() {
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $7 = 0, $0 = 0, $0$hi = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = $20() | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $0 = i64toi32_i32$0;
  $0$hi = i64toi32_i32$1;
  i64toi32_i32$2 = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$0 = 0;
    $7 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$0 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $7 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  setTempRet0($7 | 0);
  i64toi32_i32$0 = $0$hi;
  return $0 | 0;
 }
 
 function legalstub$22() {
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $7 = 0, $0 = 0, $0$hi = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = $22() | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $0 = i64toi32_i32$0;
  $0$hi = i64toi32_i32$1;
  i64toi32_i32$2 = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$0 = 0;
    $7 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$0 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $7 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  setTempRet0($7 | 0);
  i64toi32_i32$0 = $0$hi;
  return $0 | 0;
 }
 
 function legalstub$23() {
  return +(+Math_fround($23()));
 }
 
 function legalstub$26() {
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $7 = 0, $0 = 0, $0$hi = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = $26() | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $0 = i64toi32_i32$0;
  $0$hi = i64toi32_i32$1;
  i64toi32_i32$2 = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$0 = 0;
    $7 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$0 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $7 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  setTempRet0($7 | 0);
  i64toi32_i32$0 = $0$hi;
  return $0 | 0;
 }
 
 function legalstub$27() {
  return +(+Math_fround($27()));
 }
 
 function legalstub$29($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $14 = 0, $15 = 0, $4 = 0, $6 = 0, $6$hi = 0, $9$hi = 0, $3 = 0, $3$hi = 0;
  $4 = $0;
  i64toi32_i32$0 = 0;
  $6 = $1;
  $6$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $2;
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
  $9$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $6$hi;
  i64toi32_i32$0 = $6;
  i64toi32_i32$2 = $9$hi;
  i64toi32_i32$3 = $14;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = $29($4 | 0, i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $3 = i64toi32_i32$2;
  $3$hi = i64toi32_i32$0;
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$2 = 0;
    $15 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    $15 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  setTempRet0($15 | 0);
  i64toi32_i32$2 = $3$hi;
  return $3 | 0;
 }
 
 function legalstub$30($0) {
  $0 = $0 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $8 = 0, $1 = 0, $1$hi = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = $30($0 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $1 = i64toi32_i32$0;
  $1$hi = i64toi32_i32$1;
  i64toi32_i32$2 = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$0 = 0;
    $8 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$0 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $8 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  setTempRet0($8 | 0);
  i64toi32_i32$0 = $1$hi;
  return $1 | 0;
 }
 
 function legalstub$fac($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12 = 0, $13 = 0, $4 = 0, $4$hi = 0, $7$hi = 0, $2 = 0, $2$hi = 0;
  i64toi32_i32$0 = 0;
  $4 = $0;
  $4$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1;
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
  i64toi32_i32$0 = $4;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$3 = $12;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = fac(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $2 = i64toi32_i32$2;
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
  return $2 | 0;
 }
 
 function legalstub$fib($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12 = 0, $13 = 0, $4 = 0, $4$hi = 0, $7$hi = 0, $2 = 0, $2$hi = 0;
  i64toi32_i32$0 = 0;
  $4 = $0;
  $4$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1;
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
  i64toi32_i32$0 = $4;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$3 = $12;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = fib(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $2 = i64toi32_i32$2;
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
  return $2 | 0;
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21_1 = 0, $22_1 = 0, var$6 = 0, $24_1 = 0, $17_1 = 0, $18_1 = 0, $23_1 = 0, $29_1 = 0, $45 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17_1 = Math_imul(var$4, var$5);
  $18_1 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$1 = 0;
    $21_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    $21_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  $23_1 = $17_1 + Math_imul($18_1, $21_1) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$2 = 0;
    $22_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $22_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  $29_1 = $23_1 + Math_imul($22_1, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45 = $29_1 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
    $24_1 = 0;
   }
  } else {
   {
    i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
    $24_1 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   }
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24_1;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 var FUNCTION_TABLE = [const_i32, const_i64, const_f32, const_f64, id_i32, id_i64, id_f32, id_f64, f32_i32, i32_i64, f64_f32, i64_f64, fac, fib, even, odd, runaway, mutual_runaway1, mutual_runaway2, over_i32_duplicate, over_i64_duplicate, over_f32_duplicate, over_f64_duplicate];
 return {
  "type_i32": $16, 
  "type_i64": legalstub$17, 
  "type_f32": legalstub$18, 
  "type_f64": $19, 
  "type_index": legalstub$20, 
  "type_first_i32": $21, 
  "type_first_i64": legalstub$22, 
  "type_first_f32": legalstub$23, 
  "type_first_f64": $24, 
  "type_second_i32": $25, 
  "type_second_i64": legalstub$26, 
  "type_second_f32": legalstub$27, 
  "type_second_f64": $28, 
  "dispatch": legalstub$29, 
  "dispatch_structural": legalstub$30, 
  "fac": legalstub$fac, 
  "fib": legalstub$fib, 
  "even": even, 
  "odd": odd, 
  "runaway": runaway, 
  "mutual_runaway": mutual_runaway1
 };
}

var memasmFunc = new ArrayBuffer(65536);
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },setTempRet0},memasmFunc);
export var type_i32 = retasmFunc.type_i32;
export var type_i64 = retasmFunc.type_i64;
export var type_f32 = retasmFunc.type_f32;
export var type_f64 = retasmFunc.type_f64;
export var type_index = retasmFunc.type_index;
export var type_first_i32 = retasmFunc.type_first_i32;
export var type_first_i64 = retasmFunc.type_first_i64;
export var type_first_f32 = retasmFunc.type_first_f32;
export var type_first_f64 = retasmFunc.type_first_f64;
export var type_second_i32 = retasmFunc.type_second_i32;
export var type_second_i64 = retasmFunc.type_second_i64;
export var type_second_f32 = retasmFunc.type_second_f32;
export var type_second_f64 = retasmFunc.type_second_f64;
export var dispatch = retasmFunc.dispatch;
export var dispatch_structural = retasmFunc.dispatch_structural;
export var fac = retasmFunc.fac;
export var fib = retasmFunc.fib;
export var even = retasmFunc.even;
export var odd = retasmFunc.odd;
export var runaway = retasmFunc.runaway;
export var mutual_runaway = retasmFunc.mutual_runaway;
