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
     * @param Integer $k
     * @return ListNode
     */
    function rotateRight($head, $k) {
        if ($k < 1 || ! $head) {
            return $head;
        }

        $curNode     = $head;
        $tail        = $head;
        $length      = 1;

        while ($curNode->next) {
            $curNode = $curNode->next;
            $tail    = $curNode;
            $length++;
        }

        $curNode = $head;
        $k       = $k % $length;

        if ($k > 0) {
            $k        = $length - $k;
            $length   = 0;
            $curNode  = $head;
            $prevNode = null;

            while ($length < $k) {
                $prevNode = $curNode;
                $curNode  = $curNode->next;
                $length++;
            }

            $tail->next     = $head;

            if ($prevNode) {
                $prevNode->next = null;
            }
        }

        return $curNode;
    }
}