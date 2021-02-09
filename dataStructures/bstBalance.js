class Node {
    constructor(val) {
        this.val   = val;
        this.left  = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.head   = null;
        this.length = 0;
        this.tmpArr = [];
    }

    addNode(val) {
        if (! this.head) {
            this.length++;
            return this.head = new Node(val);
        }

        var curr = null;
        var next = this.head;

        while (next) {
            curr = next;

            if (val < curr.val) {
                next = curr.left;
            } else if (val == curr) {
                return; // cannot add same value into a BST
            } else if (val > curr.val) {
                next = curr.right;
            }
        }

        this.length++;

        if (val < curr.val) {
            return curr.left = new Node(val);
        } else if (val > curr.val) {
            return curr.right = new Node(val);
        } // == cannot happen b/c of above block
    }

    balance() {
        if (! this.head) {
            return;
        }

        this.buildArr(this.head);
        this.buildTree(0, this.length - 1);
        this.tmpArr = [];
    }

    buildArr(node) {
        if (node.left) {
            this.buildArr(node.left);
        }

        this.tmpArr.push(node.val);

        if (node.right) {
            this.buildArr(node.right);
        }
    }

    buildTree(beg, end, parent = null) {
        if (beg > end) {
            return;
        }

        var i    = Math.floor((beg + end) / 2);
        var node = new Node(this.tmpArr[i]);

        if (parent) {
            if (node.val < parent.val) {
                parent.left = node;
            } else if (node.val === parent.val) {
                node = parent; // should not add this value back in if repeat, tho this is impossible
            } else if (node.val > parent.val) {
                parent.right = node;
            }
        } else {
            this.head = node;
        }

        this.buildTree(beg, i - 1, node);
        this.buildTree(i + 1, end, node);
    }
}

var tree = new BST;
var arr = [];

for (var i = 0; i < 15; i++) {
    var node = tree.addNode(Math.floor(Math.random() * Math.floor(50)));

    if (node) {
        arr.push(node.val);
    }
}

console.log('initial arr');
console.log(arr);
console.log('initial bst');
console.log(tree);

tree.balance();

console.log('post balance');
console.log(tree);