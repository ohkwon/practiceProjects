class MinHeap {
	#heap;
	#length = 0;

	constructor() {
		this.#heap   = [];
		this.#length = 0;
	}

	add(value) {
		this.#heap.push(value);
		this.#length++;
		var newIndex    = this.#length - 1;
		var parentIndex = this.getParent(newIndex);

		if (typeof this.#heap[parentIndex] !== "undefined") {
			var parentValue = this.#heap[parentIndex];

    		while (parentIndex >= 0 && parentValue > value) {
    			this.#heap[newIndex] = parentValue;
    			newIndex             = parentIndex;
    			this.#heap[newIndex] = value;
    			parentIndex          = this.getParent(newIndex)

    			if (parentIndex >= 0 && typeof this.#heap[parentIndex] !== "undefined") {
    				parentValue      = this.#heap[parentIndex];
    			} else {
    				break;
    			}
    		}
		}
	}

	getParent(index) {
		return Math.floor((index - 1) / 2);
	}

	getLeft(index) {
		return index * 2 + 1;
	}

	getRight(index) {
		return index * 2 + 2;
	}

	show() {
        var output = "[";
		for (var i = 0; i < this.#heap.length; i++) {
            output += i + ": " + this.#heap[i] + ", ";
        }

        console.log(output + "]");
	}
}

var test = new MinHeap();
test.add(15);
test.add(1);
test.add(10);
test.add(-1);
test.add(4);
test.add(23);
test.add(-4);

test.show();