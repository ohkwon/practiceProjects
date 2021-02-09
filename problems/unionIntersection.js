// https://www.geeksforgeeks.org/union-intersection-two-linked-lists-set-3-hashing/

class Node {
    constructor(value) {
        this.value = value;
        this.next  = null;
    }
}

function hash(val, n) {
    return val % n; // let's keep our hash simple
}

function getUnionIntersection(head1, head2, n) {
    var output    = {union : [], intersection: []};
    var hashTable = [];
    var hashKey   = null;
    var currNode  = head1;
    var p = 0;

    while (currNode) {
        output.union.push(currNode.value);
        hashKey = hash(currNode.value, n);
        p++;

        if (typeof hashTable[hashKey] === 'undefined') {
            hashTable[hashKey] = new Node(currNode.value);
        } else {
            var hashNode = hashTable[hashKey];

            while (hashNode.next) {
                hashNode = hashNode.next;
                p++;
            }

            hashNode.next = new Node(currNode.value);
        }

        currNode = currNode.next;
    }

    currNode = head2;

    while (currNode) {
        output.union.push(currNode.value);
        hashKey = hash(currNode.value, n);
        p++;

        if (typeof hashTable[hashKey] !== 'undefined' && hashTable[hashKey]) {
            var hashNode = hashTable[hashKey];
            var prevNode = null;

            while (hashNode.value !== currNode.value && hashNode.next) {
                p++;
                prevNode = hashNode;
                hashNode = hashNode.next;
            }

            if (hashNode.value === currNode.value) {
                output.intersection.push(currNode.value);
                
                if (prevNode) {
                    prevNode.next = hashNode.next;
                } else {
                    hashTable[hashKey] = hashNode.next;
                }
            }
        }

        currNode = currNode.next;
    }

    console.log(p);

    return output;
}

// testing code
function generateLinkedList(arr) {
    var head = null;
    var curr = null;

    arr.forEach(function(val) {
        if (! head) {
            head = new Node(val);
            curr = head;
        } else {
            curr.next = new Node(val);
            curr = curr.next;
        }
    });

    return head;
}

var testArr = [
        [
            [10, 15, 4, 20],
            [8, 4, 2, 10]
        ],
        [
            [1, 2, 3, 4],
            [3, 4, 8, 10]
        ]
    ];

testArr.forEach(function(arrs) {
    console.log('Testing:');
    console.log(arrs[0]);
    console.log(arrs[1]);
    console.log(getUnionIntersection(generateLinkedList(arrs[0]), generateLinkedList(arrs[1]), 5));
});