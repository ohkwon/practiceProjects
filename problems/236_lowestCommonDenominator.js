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
    let output = null;
    var returnVal = recursive(root, p, q, output);
    return returnVal.output;
}

var recursive = function(root, p, q, output) {
    var currentReturn = {p : false, q : false, output : output};

    if (! root || currentReturn.output) { // dead end
        return currentReturn;
    }

    if (root === p) {
        currentReturn.p = true;
    } else if (root === q) {
        currentReturn.q = true;
    }

    var leftResult = lowestCommonAncestor(root.left, p, q, currentReturn.output);
    currentReturn  = Object.assign({}, currentReturn, leftResult);

    if (! currentReturn.output && currentReturn.p && currentReturn.q) {
        currentReturn.output = root;
    }

    if (currentReturn.output) {
        return currentReturn;
    }

    var rightResult = lowestCommonAncestor(root.right, p, q, currentReturn.output);
    currentReturn   = Object.assign({}, currentReturn, leftResult);

    if (! currentReturn.output && currentReturn.p && currentReturn.q) {
        currentReturn.output = root;
    }

    if (currentReturn.output) {
        return currentReturn;
    }

    return currentReturn;
}