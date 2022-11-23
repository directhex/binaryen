;; NOTE: Assertions have been generated by update_lit_checks.py --all-items and should not be edited.

;; RUN: wasm-opt %s --inlining --vacuum --optimize-instructions -all -S -o - | filecheck %s

;; Check for a specific bug involving inlining first turning a struct.get's
;; input into a null, then vacuum gets rid of intervening blocks, and then
;; optimize-instructions runs into the following situation: first it turns the
;; struct.get of a null into an unreachable, then it makes a note to itself to
;; refinalize at the end, but before the end it tries to optimize the ref.cast.
;; The ref.cast's type has not been updated to unreachable yet, but its ref has,
;; which is temporarily inconsistent. We must be careful to avoid confusion
;; there.
(module
 ;; CHECK:      (type $B (struct ))
 (type $B (struct_subtype  data))
 ;; CHECK:      (type $A (struct (field (ref null $B))))
 (type $A (struct_subtype (field (ref null $B)) data))
 ;; CHECK:      (type $ref?|$A|_=>_none (func (param (ref null $A))))

 ;; CHECK:      (func $target (type $ref?|$A|_=>_none) (param $0 (ref null $A))
 ;; CHECK-NEXT:  (drop
 ;; CHECK-NEXT:   (ref.cast_static $B
 ;; CHECK-NEXT:    (unreachable)
 ;; CHECK-NEXT:   )
 ;; CHECK-NEXT:  )
 ;; CHECK-NEXT:  (unreachable)
 ;; CHECK-NEXT: )
 (func $target (param $0 (ref null $A))
  (drop
   (ref.cast_static $B
    (struct.get $A 0
     (call $get-null)
    )
   )
  )
  (unreachable)
 )
 (func $get-null (result (ref null $A))
  (ref.null none)
 )
)
