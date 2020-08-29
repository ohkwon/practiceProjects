function search(head, val) {
    if (typeof head === 'null' || typeof head === 'undefined') {
        return false;
    }

    var queue = [head];

    while (queue.length > 0) {
        if (queue[0].val === val) {
            return queue[0];
        }

        if (queue[0].children.length > 0) {
            queue = queue.concat(queue[0].children);
        }

        queue.splice(0, 1);
    }

    return false;
}

class Node {
    constructor(val) {
        this.val      = val;
        this.children = [];
    }

    addChild(input) {
        if (typeof input === 'object') {
            this.children.push(input);
        } else {
            this.children.push(new Node(val));
        }
    }

    static generateRandTree(lvl = 5, cCount = 2) {
        var head;

        if (lvl > 1 && cCount > 0) {
            head = new Node(parseInt(Math.random() * 100));
            head = generateSub(head, lvl - 1, cCount);
        }

        return head;
        
        function generateSub(head, lvl, cCount) {
            if (lvl > 0) {
                for (var i = 0; i < cCount; i++) {
                    var node = new Node(parseInt(Math.random() * 100));
                    node     = generateSub(node, lvl - 1, cCount);
                    head.addChild(node);
                }
            }

            return head;
        }
    }
}

var head = Node.generateRandTree();

console.log(head);
var val = parseInt(Math.random() * 100);
console.log('search: ' + val);
console.log(search(head, val));