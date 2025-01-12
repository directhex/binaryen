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
 function $0(i) {
  i = i | 0;
  var j = 0;
  j = 100;
  switch_ : {
   $7 : {
    default_ : {
     $6 : {
      $5 : {
       $4 : {
        $3_1 : {
         $2_1 : {
          $1_1 : {
           $0_1 : {
            switch (i | 0) {
            case 0:
             break $0_1;
            case 1:
             break $1_1;
            case 2:
             break $2_1;
            case 3:
             break $3_1;
            case 4:
             break $4;
            case 5:
             break $5;
            case 6:
             break $6;
            case 7:
             break $7;
            default:
             break default_;
            };
           }
           return i | 0;
          }
         }
        }
        j = 0 - i | 0;
        break switch_;
       }
       break switch_;
      }
      j = 101;
      break switch_;
     }
     j = 101;
    }
    j = 102;
   }
  }
  return j | 0;
 }
 
 function $1(i, i$hi) {
  i = i | 0;
  i$hi = i$hi | 0;
  var i64toi32_i32$5 = 0, i64toi32_i32$2 = 0, $7_1 = 0, $7$hi = 0, j = 0, j$hi = 0;
  j = 100;
  j$hi = 0;
  switch_ : {
   $7 : {
    default_ : {
     $4 : {
      $5 : {
       $6 : {
        $3_1 : {
         $2_1 : {
          $1_1 : {
           $0_1 : {
            switch (i | 0) {
            case 0:
             break $0_1;
            case 1:
             break $1_1;
            case 2:
             break $2_1;
            case 3:
             break $3_1;
            case 4:
             break $4;
            case 5:
             break $5;
            case 6:
             break $6;
            case 7:
             break $7;
            default:
             break default_;
            };
           }
           i64toi32_i32$HIGH_BITS = i$hi;
           return i | 0;
          }
         }
        }
        i64toi32_i32$2 = 0;
        i64toi32_i32$5 = (i64toi32_i32$2 >>> 0 < i >>> 0) + i$hi | 0;
        i64toi32_i32$5 = 0 - i64toi32_i32$5 | 0;
        $7_1 = i64toi32_i32$2 - i | 0;
        $7$hi = i64toi32_i32$5;
        break switch_;
       }
       i64toi32_i32$5 = 0;
       j = 101;
       j$hi = i64toi32_i32$5;
      }
     }
    }
    i64toi32_i32$5 = j$hi;
    $7_1 = j;
    $7$hi = i64toi32_i32$5;
    break switch_;
   }
   i64toi32_i32$5 = 4294967295;
   $7_1 = 4294967291;
   $7$hi = i64toi32_i32$5;
  }
  i64toi32_i32$5 = $7$hi;
  i64toi32_i32$2 = $7_1;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
  return i64toi32_i32$2 | 0;
 }
 
 function $2(i) {
  i = i | 0;
  var $5_1 = 0, $6_1 = 0, $7_1 = 0, $8 = 0, $9 = 0;
  $2_1 : {
   $1_1 : {
    $0_1 : {
     default_ : {
      $5_1 = Math_imul(2, i);
      $6_1 = $5_1;
      $7_1 = $5_1;
      $8 = $5_1;
      $9 = $5_1;
      switch (3 & i | 0 | 0) {
      case 0:
       break $0_1;
      case 1:
       break $1_1;
      case 2:
       break $2_1;
      default:
       break default_;
      };
     }
     $6_1 = 1e3 + $9 | 0;
    }
    $7_1 = 100 + $6_1 | 0;
   }
   $8 = 10 + $7_1 | 0;
  }
  return $8 | 0;
 }
 
 function $3() {
  return 1 | 0;
 }
 
 function legalstub$1($0_2, $1_2) {
  $0_2 = $0_2 | 0;
  $1_2 = $1_2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12 = 0, $13 = 0, $4_1 = 0, $4$hi = 0, $7$hi = 0, $2_2 = 0, $2$hi = 0;
  i64toi32_i32$0 = 0;
  $4_1 = $0_2;
  $4$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1_2;
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
  i64toi32_i32$2 = $1(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $2_2 = i64toi32_i32$2;
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
  return $2_2 | 0;
 }
 
 var FUNCTION_TABLE = [];
 return {
  "stmt": $0, 
  "expr": legalstub$1, 
  "arg": $2, 
  "corner": $3
 };
}

var memasmFunc = new ArrayBuffer(65536);
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },setTempRet0},memasmFunc);
export var stmt = retasmFunc.stmt;
export var expr = retasmFunc.expr;
export var arg = retasmFunc.arg;
export var corner = retasmFunc.corner;
