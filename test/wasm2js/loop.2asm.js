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
 function dummy() {
  
 }
 
 function $1() {
  
 }
 
 function $2() {
  var $0 = 0;
  $0 = 7;
  return $0 | 0;
 }
 
 function $3() {
  var $2_1 = 0;
  dummy();
  dummy();
  dummy();
  dummy();
  dummy();
  dummy();
  dummy();
  $2_1 = 8;
  return $2_1 | 0;
 }
 
 function $4() {
  var $2_1 = 0;
  dummy();
  dummy();
  $2_1 = 9;
  return $2_1 | 0;
 }
 
 function $5() {
  var $2_1 = 0, $6_1 = 0, $10_1 = 0, $14_1 = 0, $18_1 = 0, $22 = 0, $26 = 0, $30 = 0, $34 = 0, $38 = 0, $42 = 0, $46 = 0, $50 = 0, $54 = 0, $58 = 0, $62 = 0, $66 = 0, $70 = 0, $74 = 0, $78 = 0, $82 = 0;
  dummy();
  $2_1 = 150;
  $6_1 = $2_1;
  $10_1 = $6_1;
  $14_1 = $10_1;
  $18_1 = $14_1;
  $22 = $18_1;
  $26 = $22;
  $30 = $26;
  $34 = $30;
  $38 = $34;
  $42 = $38;
  $46 = $42;
  $50 = $46;
  $54 = $50;
  $58 = $54;
  $62 = $58;
  $66 = $62;
  $70 = $66;
  $74 = $70;
  $78 = $74;
  $82 = $78;
  return $82 | 0;
 }
 
 function $6() {
  var $2_1 = 0;
  dummy();
  $2_1 = 13;
  return __wasm_ctz_i32($2_1 | 0) | 0 | 0;
 }
 
 function $7() {
  var $2_1 = 0, $3_1 = 0, $6_1 = 0;
  dummy();
  $2_1 = 3;
  $3_1 = $2_1;
  dummy();
  $6_1 = 4;
  return Math_imul($3_1, $6_1) | 0;
 }
 
 function $8() {
  var $2_1 = 0;
  dummy();
  $2_1 = 13;
  return ($2_1 | 0) == (0 | 0) | 0;
 }
 
 function $9() {
  var $2_1 = Math_fround(0), $3_1 = Math_fround(0), $6_1 = Math_fround(0);
  dummy();
  $2_1 = Math_fround(3.0);
  $3_1 = $2_1;
  dummy();
  $6_1 = Math_fround(3.0);
  return $3_1 > $6_1 | 0;
 }
 
 function $10() {
  block : {
   loop_in : do {
    break block;
    break loop_in;
   } while (1);
  }
  block48 : {
   if (1) {
    break block48
   }
   abort();
  }
  block50 : {
   switch (0 | 0) {
   default:
    break block50;
   };
  }
  block52 : {
   switch (1 | 0) {
   case 0:
    break block52;
   case 1:
    break block52;
   default:
    break block52;
   };
  }
  return 19 | 0;
 }
 
 function $11() {
  var $0 = 0, $1_1 = 0, $3_1 = 0;
  block : {
   loop_in : do {
    $0 = 18;
    break block;
    break loop_in;
   } while (1);
  }
  return $0 | 0;
 }
 
 function $12() {
  var $0 = 0, $5_1 = 0, $7_1 = 0;
  block : {
   $0 = 18;
   break block;
  }
  return $0 | 0;
 }
 
 function $13() {
  var $0 = 0, $1_1 = 0, $2_1 = 0, $5_1 = 0, $6_1 = 0, $9_1 = 0, $10_1 = 0, $12_1 = 0, $17_1 = 0, $18_1 = 0, $21 = 0, $22 = 0;
  $0 = 0;
  $1_1 = $0;
  block : {
   $2_1 = 1;
   break block;
  }
  $0 = $1_1 + $2_1 | 0;
  $5_1 = $0;
  block55 : {
   $6_1 = 2;
   break block55;
  }
  $0 = $5_1 + $6_1 | 0;
  $9_1 = $0;
  block60 : {
   $10_1 = 4;
   break block60;
  }
  $12_1 = $10_1;
  $0 = $9_1 + $12_1 | 0;
  $17_1 = $0;
  block62 : {
   $18_1 = 8;
   break block62;
  }
  $0 = $17_1 + $18_1 | 0;
  $21 = $0;
  block64 : {
   $22 = 16;
   break block64;
  }
  $0 = $21 + $22 | 0;
  return $0 | 0;
 }
 
 function $14() {
  var $0 = 0, $1_1 = 0, $2_1 = 0, $3_1 = 0, $5_1 = 0;
  $0 = 0;
  $1_1 = $0;
  loop_in : do {
   continue loop_in;
   break loop_in;
  } while (1);
 }
 
 function fx() {
  var $0 = 0;
  block : {
   $0 = 1;
   $0 = Math_imul($0, 3);
   $0 = $0 - 5 | 0;
   $0 = Math_imul($0, 7);
   break block;
  }
  return ($0 | 0) == (4294967282 | 0) | 0;
 }
 
 function $16($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$0 = 0, $1$hi = 0, i64toi32_i32$5 = 0, i64toi32_i32$1 = 0, $1_1 = 0, i64toi32_i32$3 = 0;
  i64toi32_i32$0 = 0;
  $1_1 = 1;
  $1$hi = i64toi32_i32$0;
  block : {
   loop_in : do {
    i64toi32_i32$0 = $0$hi;
    if (($0 | i64toi32_i32$0 | 0 | 0) == (0 | 0)) {
     break block
    }
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$0 = $1$hi;
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$1 = $1$hi;
    i64toi32_i32$1 = __wasm_i64_mul($0 | 0, i64toi32_i32$0 | 0, $1_1 | 0, $1$hi | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
    $1_1 = i64toi32_i32$1;
    $1$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 1;
    i64toi32_i32$5 = ($0 >>> 0 < i64toi32_i32$3 >>> 0) + i64toi32_i32$1 | 0;
    i64toi32_i32$5 = i64toi32_i32$0 - i64toi32_i32$5 | 0;
    $0 = $0 - i64toi32_i32$3 | 0;
    $0$hi = i64toi32_i32$5;
    continue loop_in;
    break loop_in;
   } while (1);
  }
  i64toi32_i32$5 = $1$hi;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
  return $1_1 | 0;
 }
 
 function $17($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$0 = 0, $1$hi = 0, $2$hi = 0, i64toi32_i32$1 = 0, $2_1 = 0, i64toi32_i32$5 = 0, $1_1 = 0, i64toi32_i32$4 = 0;
  i64toi32_i32$0 = 0;
  $1_1 = 1;
  $1$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $2_1 = 2;
  $2$hi = i64toi32_i32$0;
  block : {
   loop_in : do {
    i64toi32_i32$0 = $2$hi;
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$0 = $2$hi;
    i64toi32_i32$1 = $0$hi;
    if (i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & $2_1 >>> 0 > $0 >>> 0 | 0) | 0) {
     break block
    }
    i64toi32_i32$0 = $2$hi;
    i64toi32_i32$0 = __wasm_i64_mul($1_1 | 0, $1$hi | 0, $2_1 | 0, i64toi32_i32$0 | 0) | 0;
    $1_1 = i64toi32_i32$0;
    $1$hi = i64toi32_i32$HIGH_BITS;
    i64toi32_i32$0 = 0;
    i64toi32_i32$1 = 1;
    i64toi32_i32$4 = $2_1 + i64toi32_i32$1 | 0;
    i64toi32_i32$5 = $2$hi + i64toi32_i32$0 | 0;
    if (i64toi32_i32$4 >>> 0 < i64toi32_i32$1 >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
    }
    $2_1 = i64toi32_i32$4;
    $2$hi = i64toi32_i32$5;
    continue loop_in;
    break loop_in;
   } while (1);
  }
  i64toi32_i32$5 = $1$hi;
  i64toi32_i32$HIGH_BITS = $1$hi;
  return $1_1 | 0;
 }
 
 function $18($0, $1_1) {
  $0 = Math_fround($0);
  $1_1 = Math_fround($1_1);
  var $2_1 = Math_fround(0), $3_1 = Math_fround(0);
  block : {
   loop_in : do {
    if ($0 == Math_fround(0.0)) {
     break block
    }
    $2_1 = $1_1;
    block71 : {
     loop_in72 : do {
      if ($2_1 == Math_fround(0.0)) {
       break block71
      }
      if ($2_1 < Math_fround(0.0)) {
       break block
      }
      $3_1 = Math_fround($3_1 + $2_1);
      $2_1 = Math_fround($2_1 - Math_fround(2.0));
      continue loop_in72;
      break loop_in72;
     } while (1);
    }
    $3_1 = Math_fround($3_1 / $0);
    $0 = Math_fround($0 - Math_fround(1.0));
    continue loop_in;
    break loop_in;
   } while (1);
  }
  return Math_fround($3_1);
 }
 
 function legalstub$16($0, $1_1) {
  $0 = $0 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12_1 = 0, $13_1 = 0, $4_1 = 0, $4$hi = 0, $7$hi = 0, $2_1 = 0, $2$hi = 0;
  i64toi32_i32$0 = 0;
  $4_1 = $0;
  $4$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    $12_1 = 0;
   }
  } else {
   {
    i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
    $12_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
  }
  $7$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $4$hi;
  i64toi32_i32$0 = $4_1;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$3 = $12_1;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = $16(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0;
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
    $13_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    $13_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  setTempRet0($13_1 | 0);
  i64toi32_i32$2 = $2$hi;
  return $2_1 | 0;
 }
 
 function legalstub$17($0, $1_1) {
  $0 = $0 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12_1 = 0, $13_1 = 0, $4_1 = 0, $4$hi = 0, $7$hi = 0, $2_1 = 0, $2$hi = 0;
  i64toi32_i32$0 = 0;
  $4_1 = $0;
  $4$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    $12_1 = 0;
   }
  } else {
   {
    i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
    $12_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
  }
  $7$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $4$hi;
  i64toi32_i32$0 = $4_1;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$3 = $12_1;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = $17(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0;
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
    $13_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    $13_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  setTempRet0($13_1 | 0);
  i64toi32_i32$2 = $2$hi;
  return $2_1 | 0;
 }
 
 function legalstub$18($0, $1_1) {
  $0 = +$0;
  $1_1 = +$1_1;
  return +(+Math_fround($18(Math_fround(Math_fround($0)), Math_fround(Math_fround($1_1)))));
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21 = 0, $22 = 0, var$6 = 0, $24 = 0, $17_1 = 0, $18_1 = 0, $23 = 0, $29 = 0, $45 = 0, $56$hi = 0, $62$hi = 0;
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
    $21 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    $21 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  $23 = $17_1 + Math_imul($18_1, $21) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$2 = 0;
    $22 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   }
  } else {
   {
    i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $22 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
   }
  }
  $29 = $23 + Math_imul($22, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45 = $29 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   {
    i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
    $24 = 0;
   }
  } else {
   {
    i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
    $24 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   }
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + 4294967295 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
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
 
 var FUNCTION_TABLE = [];
 return {
  "empty": $1, 
  "singular": $2, 
  "multi": $3, 
  "nested": $4, 
  "deep": $5, 
  "as_unary_operand": $6, 
  "as_binary_operand": $7, 
  "as_test_operand": $8, 
  "as_compare_operand": $9, 
  "break_bare": $10, 
  "break_value": $11, 
  "break_repeated": $12, 
  "break_inner": $13, 
  "cont_inner": $14, 
  "effects": fx, 
  "while_": legalstub$16, 
  "for_": legalstub$17, 
  "nesting": legalstub$18
 };
}

var memasmFunc = new ArrayBuffer(65536);
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },setTempRet0},memasmFunc);
export var empty = retasmFunc.empty;
export var singular = retasmFunc.singular;
export var multi = retasmFunc.multi;
export var nested = retasmFunc.nested;
export var deep = retasmFunc.deep;
export var as_unary_operand = retasmFunc.as_unary_operand;
export var as_binary_operand = retasmFunc.as_binary_operand;
export var as_test_operand = retasmFunc.as_test_operand;
export var as_compare_operand = retasmFunc.as_compare_operand;
export var break_bare = retasmFunc.break_bare;
export var break_value = retasmFunc.break_value;
export var break_repeated = retasmFunc.break_repeated;
export var break_inner = retasmFunc.break_inner;
export var cont_inner = retasmFunc.cont_inner;
export var effects = retasmFunc.effects;
export var while_ = retasmFunc.while_;
export var for_ = retasmFunc.for_;
export var nesting = retasmFunc.nesting;
