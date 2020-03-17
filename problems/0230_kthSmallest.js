function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function addTreeNode(root, value) {
    if (! root) {
        var root = new TreeNode(value);
    } else if (typeof value === "number") {
        var currentNode = root;
        var nextNode    = root;
        var right       = false;

        while (nextNode) {
            currentNode = nextNode;
            if (value < currentNode.val) {
                nextNode = currentNode.left;
                right = false;
            } else if (value > currentNode.val) {
                nextNode = currentNode.right;
                right = true;
            } else {
                return root;
            }
        }

        if (right) {
            currentNode.right = new TreeNode(value);
        } else {
            currentNode.left  = new TreeNode(value);
        }
    }

    return root;
}

function showTree(root) {
    let arr = [];
    if (root) {
        arr[0] = [root.val];
        arr = showTreeHelper(root, arr, 1);
    }
    console.log(arr);
    // showTreeArr(arr);
}

function showTreeHelper(root, arr, level) {
    var nextRow = [];
    if (root) {
        if (typeof arr[level] === "undefined") {
            arr[level] = [];
        }

        if (root.left) {
            arr[level].push(root.left.val);
        } else {
            arr[level].push(null);
        }

        if (root.right) {
            arr[level].push(root.right.val);
        } else {
            arr[level].push(null);
        }

        level++;

        arr = showTreeHelper(root.left, arr, level);
        arr = showTreeHelper(root.right, arr, level);
    }

    return arr;
}

function showTreeArr(arr) {
    var endI = arr.length - 1
    // console.log(endI);
    for (var i = 0; i < arr.length; i++) {
        var string = spaces(endI - 1);

        for (var i2 = 0; i2 < arr[i].len; i2++) {
            var numStr = "";
            if (arr[i][i2] !== null) {
                numStr = arr[i][i2];
            } else {
                numStr = "null";
            }
            console.log(numStr);
            if (numStr.length < 2) {
                numStr = numStr.padEnd(2 - numStr.length, " ");
            }
            console.log(numStr);
            string += numStr + spaces(endI);
        }

        // console.log(string);
        endI --;
    }
}

function spaces(index) {
    var space = " ";
    var repeat = (Math.pow(2, index + 1) - 1) * 2;
    // console.log(repeat);
    return space.repeat(repeat);
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var kthSmallestClass = new KthSmallestClass();
    return kthSmallestClass.countTraversal(root, k);
}

class KthSmallestClass {
    #counts = {};
    countTraversal(root, k, parentNodeArr = []) {
        var result = false;

        if (! root) {
            return result;
        }

        var currentNodeCount = this.countTreeComplex(root, k, parentNodeArr);
        console.log("rootval: " + root.val + "; count: " + currentNodeCount);
        if (currentNodeCount === k) {
            return root.val;
        } else if (currentNodeCount > k) {
            result = this.countTraversal(root.left, k, parentNodeArr);
        } else {
            parentNodeArr.push(root);
            result = this.countTraversal(root.right, k, parentNodeArr);
        }

        return result;
    }
    /**
     * @param parentNodeArr is array of nodes that are lesser parents that must be counted as well
    */
    countTreeComplex(root, k, parentNodeArr = []) {
        if (! root) {
            return 0;
        }

        var currentNodeCount = 1 + this.countTreeSimple(root.left, k);

        for (var i = 0; i < parentNodeArr.length; i++) {
            currentNodeCount++;
            currentNodeCount += this.countTreeSimple(parentNodeArr[i].left, k);
        }

        return currentNodeCount;
    }

    countTreeSimple(root, k) {
        var count = 0;

        if (root && root.val) {
            if (typeof this.#counts[root.val] !== undefined && this.#counts[root.val]) {
                return this.#counts[root.val];
            }

            count++;
            count += this.countTreeSimple(root.left);
            count += this.countTreeSimple(root.right);

            this.#counts[root.val]
        }


        return count;
    }
}




var test = false;

// for (var i = 0; i < 3; i++) {
//     test = addTreeNode(test, Math.floor(Math.random() * 50));
// }

var testarr = [41,37,44,24,39,42,48,1,35,38,40,null,43,46,49,0,2,30,36,null,null,null,null,null,null,45,47,null,null,null,null,null,4,29,32,null,null,null,null,null,null,3,9,26,null,31,34,null,null,7,11,25,27,null,null,33,null,6,8,10,16,null,null,null,28,null,null,5,null,null,null,null,null,15,19,null,null,null,null,12,null,18,20,null,13,17,null,null,22,null,14,null,null,21,23]
for (var i = 0; i < testarr.length; i++) {
    test = addTreeNode(test, testarr[i]);
}

showTree(test);

console.log(kthSmallest(test, 24));