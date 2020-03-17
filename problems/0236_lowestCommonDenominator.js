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
    let tracker = new Tracker;

    return tracker.start(root, p, q);
}

class Tracker {
    p          = null;
    q          = null;
    outputNode = null;

    start(root, p, q) {
        this.find(root, p, q);

        return this.outputNode;
    }

    find(root, p, q) {
        if ((this.p && this.q) || this.outputNode) {
            return;
        }

        var current = {p : null, q: null};

        if (! root) {
            return current;
        }

        if (! this.p && root === p) {
            this.p    = root;
            current.p = root;
        }
        else if (! this.q && root === q) {
            this.q    = root;
            current.q = root;
        }

        var currentRecursive = this.find(root.left, p, q);

        if (currentRecursive && typeof currentRecursive.p !== 'undefined') {
            current = this.assignTruthy(current, currentRecursive);

            if (current.p && current.q && ! this.outputNode) {
                this.outputNode = root;
                return;
            }
        }

        var currentRecursive = this.find(root.right, p, q);

        if (currentRecursive && typeof currentRecursive.p !== 'undefined') {
            current = this.assignTruthy(current, currentRecursive);

            if (current.p && current.q && ! this.outputNode) {
                this.outputNode = root;
                return;
            }
        }

        return current;
    }

    assignTruthy(current, newCurrent) {
        if (newCurrent.p) {
            current.p = newCurrent.p;
        }

        if (newCurrent.q) {
            current.q = newCurrent.q;
        }

        return current;
    }
}













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
var lowestCommonAncestor_old = function(root, p, q) {
    let output = null;
    var returnVal = recursive(root, p, q, output);
    return returnVal.output;
}

var recursive_old = function(root, p, q, output) {
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