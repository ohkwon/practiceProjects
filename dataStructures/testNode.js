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
            head = new Node(parseInt(Math.random(100) * 100));
            head = generateSub(head, lvl - 1, cCount);
        }

        return head;
        
        function generateSub(head, lvl, cCount) {
            if (lvl > 0) {
                for (var i = 0; i < cCount; i++) {
                    var node = new Node(parseInt(Math.random(100) * 100));
                    node     = generateSub(node, lvl - 1, cCount);
                    head.addChild(node);
                }
            }

            return head;
        }
    }
}

// export {Node};