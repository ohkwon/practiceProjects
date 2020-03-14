<?php
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @return ListNode
     */
    function oddEvenList($head) {
        $pointers = [];
        $evenHead = $head ? $head->next : null;
        $current  = $head;
        $i        = 1;
        
        while ($current) {
            if (isset($pointers[$i%2])) {
                $pointers[$i%2]->next = $current;
            }
            
            $pointers[$i%2] = $current;
            $current        = $current->next;
            // $pointers[$i%2] = null;
            $i++;
        }

        if (isset($pointers[0])) {
            $pointers[0]->next = null;
        }
        
        if (isset($pointers[1])) {
            $pointers[1]->next = $evenHead;
        }
        
        return $head;
        
        // huy melissa
//         $p  = $head;
//         $p2 = $head ? $head->next : null;

//         while ($p) {
//             if ($p->next) {
//                 $temp = $p->next;
                
//                 if ($temp->next) {
//                     $p->next = $temp->next;
//                 }
                
//                 if ($p->next) {
//                     $temp->next = $p->next->next;
//                 }
//             }
            
//             if ($p->next) {
//                 $p = $p->next;
//             } else {
//                 break;
//             }
//         }
        
//         if ($p) {
//             $p->next = $p2;
//         }
        
//         return $head;
    }
}