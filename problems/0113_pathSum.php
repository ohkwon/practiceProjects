<?php
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($value) { $this->val = $value; }
 * }
 */
class Solution {
    public $return = [];
    /**
     * @param TreeNode $root
     * @param Integer $sum
     * @return Integer[][]
     */
    function pathSum($root, $sum) {
        $this->traverse($root, $sum);
        return $this->return;
    }

    function traverse($root, $sum, $path = []) {
        if ($root) {
            $sum   -= $root->val;
            $path[] = $root->val;
            
            if (! $root->left && ! $root->right) {
                if ($sum == 0 && ! empty($path)) {
                    $this->return[] = $path;
                }

                return;
            }

            $this->traverse($root->left, $sum, $path);
            $this->traverse($root->right, $sum, $path);
        }
    }
}