// https://www.geeksforgeeks.org/find-itinerary-from-a-given-list-of-tickets/
class Node {
    constructor(val) {
        this.val  = val;
        this.next = null;
        this.end  = null;
    }
}

function findItinerary(arr) {
    var currNode = null;
    var head     = null;
    var keys     = Object.keys(arr);
    var p        = 0;

    for (var i = 0; i< keys.length; i++) {
        p++;

        if (typeof arr[keys[i]] !== 'undefined') {
            currNode          = new Node(arr[keys[i]]);
            arr[keys[i]]      = new Node(keys[i]);
            arr[keys[i]].next = currNode;
            arr[keys[i]].end  = currNode;
            head              = arr[keys[i]];
            // this while loops is okay as long as the data provided is not cyclical since we delete on find
            while (typeof arr[currNode.val] !== 'undefined') {
                p++;

                if (typeof arr[currNode.val] === 'string') {
                    currNode.next = new Node(arr[currNode.val]);
                    delete(arr[currNode.val]);
                    currNode      = currNode.next;
                } else {
                    currNode.next = arr[currNode.val].next;
                    var end       = arr[currNode.val].end;
                    delete(arr[currNode.val]);
                    currNode      = end;
                }

                head.end = currNode;
            }
        }
    }

    keys = Object.keys(arr);
    currNode = arr[keys[0]];
    console.log('Output:');

    while (currNode.next) {
        p++;
        console.log(currNode.val + ' -> ' + currNode.next.val);
        currNode = currNode.next
;    }

    console.log('performance: ' + p);

    return;
}

var test = {
        "Chennai" : "Banglore",
        "Bombay"  : "Delhi",
        "Goa"     : "Chennai",
        "Delhi"   : "Goa"
    };

findItinerary(test);