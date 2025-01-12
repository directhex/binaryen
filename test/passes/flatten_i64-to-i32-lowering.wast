(module
 (import "env" "func" (func $import (result i64)))
 (func $defined (result i64)
  (i64.add (i64.const 1) (i64.const 2))
 )
 (func $unreachable-select-i64 (result i64)
  (select
   (i64.const 1)
   (unreachable)
   (i32.const 2)
  )
 )
 (func $unreachable-select-i64-b (result i64)
  (select
   (unreachable)
   (i64.const 3)
   (i32.const 4)
  )
 )
 (func $unreachable-select-i64-c (result i64)
  (select
   (i64.const 5)
   (i64.const 6)
   (unreachable)
  )
 )
)
(module
 (global $f (mut i64) (i64.const 0x12345678ABCDEFAF))
 (global $g (mut i64) (global.get $f))
 (func $call (param i64))
 (func "exp"
  (call $call (global.get $f))
  (global.set $f (i64.const 0x1122334455667788))
 )
 (func "unreach"
  (global.set $f
   (block $label$1 (result i64)
    (unreachable)
   )
  )
 )
)
(module
 (global $f (mut i64) (i64.const 0x12345678ABCDEFAF))
 (global $g (mut i64) (global.get $f))
 (func $call (param i64))
 (func "exp"
  (call $call (global.get $f))
  (global.set $f (i64.const 0x1122334455667788))
 )
)

