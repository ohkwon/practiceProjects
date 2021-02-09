// https://www.geeksforgeeks.org/vertical-sum-in-a-given-binary-tree/

class Node {
    constructor (val) {
        this.val   = val;
        this.left  = null;
        this.right = null;
    }
}

class Summator {
    constructor () {
        this.sums = [];
        this.p    = 0;
    }

    // expected node to be head of binary tree
    run(node) {
        this.add(node);
        console.log('p: ' + this.p);
        return this.sums;
    }

    add(node, i = 0) {
        if (typeof node !== 'undefined' && node) {
            this.p++;
            if (typeof this.sums[i] === 'undefined') {
                this.sums[i] = 0;
            }

            this.sums[i] += node.val;

            this.add(node.left, i - 1);
            this.add(node.right, i + 1);
        }

    }
}

function generateBinaryTree(len = 15, range = 15) {
    var i     = 1;
    var head  = new Node(Math.floor(Math.random() * Math.floor(15)));
    var queue = [head];

    while (i < len) {
        var newQueue = [];

        for (var l = 0; l < queue.length; l++) {
            queue[l].left = new Node(Math.floor(Math.random() * Math.floor(15)));
            i++;

            if (i >= len) {
                break;
            }

            newQueue.push(queue[l].left);

            queue[l].right = new Node(Math.floor(Math.random() * Math.floor(15)));
            i++

            newQueue.push(queue[l].right);

            if (i >= len) {
                break;
            }
        }

        queue = newQueue;
    }

    return head;
}

function printBinaryTree(node) {
    var queue = [node];
    console.log('tree:');
    var str   = '';

    while (queue.length > 0) {
        var newQueue = [];
        var newQueueStart = false;

        for (var i = 0; i < queue.length; i++) {
            str += queue[i].val + '   ';

            if (queue[i].left) {
                newQueueStart = true;
                newQueue.push(queue[i].left)
            } else {
                newQueue.push(new Node('X'));
            }

            if (queue[i].right) {
                newQueueStart = true;
                newQueue.push(queue[i].right)
            } else {
                newQueue.push(new Node('X'));
            }
        }

        console.log(str);
        str = '';

        if (newQueueStart) {
            queue = newQueue;
        } else {
            queue = [];
        }
    }
}

var tree = generateBinaryTree();
printBinaryTree(tree);
var run = new Summator();

console.log(run.run(tree));