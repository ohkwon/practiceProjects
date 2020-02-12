class ThreeSumClass {
    #indexed = [];
    #output  = [];
    #history = {};
    //************************************************************
    // 
    //************************************************************
    threeSum(nums) {
        if (nums.length < 3) {
            return this.#output;
        }

        for (var i = 0; i < nums.length; i++) {
            if (typeof this.#indexed[nums[i]] === "undefined") {
                this.#indexed[nums[i]] = [];
            }

            this.#indexed[nums[i]].push(i);
        }

        for (var i = 0; i < nums.length; i++) {
            this.find(nums, i);
        }

        return this.#output;
    }
    //************************************************************
    // 
    //************************************************************
    find(nums, i) {
        // var i represents the first number in the sequence of three, and var i2 represents the second
        for (var i2 = i + 1; i2 < nums.length; i2++) {
            // var target is the third number we know will make the sum = 0
            var target     = nums[i] + nums[i2];
            if (target !== 0) {
                target = target * -1;
            }

            var sortedList = new LinkedList();
            // data structure for quicker sorting of 3 integers
            sortedList.add(nums[i]);
            sortedList.add(nums[i2]);
            sortedList.add(target);

            // history keeps a log indexed by a string of the three numbers that allows us to have immediate lookup for the same combination
            if (typeof this.#history[sortedList.output(true)] !== "undefined") {
                continue;
            }

            if (typeof this.#indexed[target] !== "undefined") {
                // check that the same index isn't used since can't use the same number twice
                for (var numsI = 0; numsI < this.#indexed[target].length; numsI++) {
                    if (this.#indexed[target][numsI] != i && this.#indexed[target][numsI] != i2) {
                        this.#history[sortedList.output(true)] = true; // could log history for all attempts but that would increase the space used for this
                        this.#output.push(sortedList.output());
                        break;
                    }
                }
            }
        }
        return;
    }
}

class LinkedList {
    #head = null;
    //************************************************************
    // adds values and keeps them sorted from least to greatest
    //************************************************************
    add(input) {
        var newNode  = new Node(input);
        var nextNode = null;
        var prevNode = null;

        if (this.#head) {
            nextNode = this.#head;
        }

        this.#head   = newNode;
        newNode.next = nextNode;

        while (nextNode && newNode.number > nextNode.number) {
            if (newNode === this.#head) {
                this.#head = nextNode;
            } else if (newNode === this.#head.next) {
                prevNode = this.#head;
            }

            newNode.next  = nextNode.next;
            nextNode.next = newNode;

            if (prevNode) {
                prevNode.next = nextNode;
                prevNode      = nextNode;
            }

            nextNode = newNode.next;
        }

        return;
    }
    //************************************************************
    // outputs the sorted string or array
    //************************************************************
    output(string = false) {
        var output = string ? "" : [];

        if (this.#head) {
            var currentNode = this.#head;

            while (currentNode) {
                if (string) {
                    output += currentNode.number.toString();

                    if (currentNode.next) {
                         output += ':';
                    }
                } else {
                    output.push(currentNode.number);
                }

                currentNode = currentNode.next;
            }
        }

        return output;
    }
}

class Node {
    number = null;
    next   = null;

    constructor (number) {
        this.number = number;
    }
}

var test = new ThreeSumClass();
console.log(test.threeSum([1,2,3,4,5,6,-1,-2,-5,-23,0,123,-15]));