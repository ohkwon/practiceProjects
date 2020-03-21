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
    public $currentNode = null;
    /**
     * @param TreeNode $root
     * @return NULL
     */
    function flatten($root) {
        if ($root) {
            $this->traverse($root);
        }

        return $root;
    }

    function traverse($node) {
        if (! $this->currentNode) {
            $this->currentNode = $node;
        } else {
            $this->currentNode->right = $node;
            $this->currentNode        = $this->currentNode->right;
        }

        $rightNode = $node ? $node->right : null;

        if ($node->left) {
            $this->traverse($node->left);
            $node->left = null;
        }

        if ($rightNode) {
            $this->traverse($rightNode);
        }
    }
}