/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var currentReturn = {'p' : false, 'q' : false};

    if (! root) { // dead end
        return currentReturn;
    }

    if (typeof output === 'undefined') {
        let output = null;
    }

    if (root === p) {
        currentReturn.p = true;
    } else if (root === q) {
        currentReturn.q = true;
    }

    var leftResult = lowestCommonAncestor(root.left, p, q);
    var rightResult = lowestCommonAncestor(root.right, p, q);

    return currentReturn;
    // compare if match to either
    // recursive left
    // recursive right
    // if both recursive calls return parental map for both, we found our thing;
}
