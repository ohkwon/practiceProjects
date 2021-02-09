class Node {
    constructor (val) {
        this.val    = val;
        this.left   = null;
        this.right  = null;
        this.height = 1;
    }
}

function getHeight(node) {
    if (! node) {
        return 0;
    }
    
    return node.height + max(getHeight(node.right), getHeight(node.left));
}

function getBal(node) {
    return getHeight(node.right) - getHeight(node.left);
}

function max(a, b) {
    if (a > b) {
        return a;
    }

    return b;
}

function min(a, b) {
    if (a < b) {
        return a;
    }

    return b;
}

class SearchTree {
    constructor () {
        this.head   = null;
        this.length = 0;
    }

    addNode (newVal) {
        if (! this.head) {
            this.head = new Node(newVal);
            this.length++;
            return;
        }

        var nextNode = this.head;
        var currNode = null;
        var isLeft   = null;

        while (nextNode) {
            currNode = nextNode;

            if (newVal < currNode.val) {
                nextNode = currNode.left;
                isLeft   = true;
            }
            else if (newVal === currNode.val) {
                console.log('cannot add duplicate in binary search tree');
                return;
            }
            else {
                nextNode = currNode.right;
                isLeft   = false;
            }
        }

        if (isLeft) {
            currNode.left  = new Node(newVal);
        } else {
            currNode.right = new Node(newVal);
        }

        this.length++;
    }

    search (searchVal) {
        if (! this.head) {
            return false;
        }

        var currNode = this.head;

        while (currNode) {
            if (searchVal < currNode.val) {
                currNode = currNode.left;
            }
            else if (searchVal === currNode.val) {
                return currNode;
            }
            else {
                currNode = currNode.right;
            }
        }

        return false;
    }
}

var test = [15, 6, 23,5,2,13,20,18,7,14,27,8,19,17, 100];
var tree = new SearchTree();

for (var i in test) {
    tree.addNode(test[i]);
}

console.log(getHeight(tree.head));
console.log(getBal(tree.head));
console.log(tree);

// test = [20, 15, 4, 21, 17];

// for (var i in test) {
//     console.log('Searching for ' + test[i]);
//     console.log(tree.search(test[i]));
// }