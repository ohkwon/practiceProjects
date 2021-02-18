class Node {
    constructor (value) {
        this.value = value;
        this.left  = null;
        this.right = null;
    }
}

class Tree {
    constructor () {
        this.head = null;
    }

    add(value) {
        if (this.head === null) {
            return this.head = new Node(value);
        }

        var curr = null;
        var next = this.head;

        while (next) {
            curr = next;

            if (value < curr.value) {
                next = curr.left;
            } else if (value === curr.value) { // cannot put same value in bst
                return;
            } else {
                next = curr.right;
            }
        }

        if (value < curr.value) {
            return curr.left = new Node(value);
        } else {
            return curr.right = new Node(value);
        }
    }
}

const bst = new Tree();

for (var i = 0; i < 15; i++) {
    bst.add(Math.floor(Math.random() * 30));
}

const countRange = (head, rangeLeft, rangeRight) => {
    const _countRange = (node) => {
        if (! node) {
            return 0;
        }
    
        if (node.value < rangeLeft) {
            return _countRange(node.right);
        } else if (node.value > rangeRight) {
            return _countRange(node.left);
        }
        
        var sum = 1;
        sum    += _countRange(node.left);
        sum    += _countRange(node.right);

        return sum;
    }
    
    return _countRange(head);
}

console.log(countRange(bst.head, 10, 20));