class MinHeap {
	#heap;
	#length = 0;
    //************************************************************************
    // 
    //************************************************************************
	constructor() {
		this.#heap   = [];
		this.#length = 0;
	}
    //************************************************************************
    // 
    //************************************************************************
	add(value) {
		this.#heap.push(value);
		this.#length++;
		var newIndex    = this.#length - 1;
		var parentIndex = this.getParent(newIndex);

        while (parentIndex >= 0 && this.#heap[parentIndex] > this.#heap[newIndex]) {
            this.swap(newIndex, parentIndex);
            newIndex    = parentIndex;
			parentIndex = this.getParent(newIndex);
		}
	}
    //************************************************************************
    // 
    //************************************************************************
	getParent(index) {
		return Math.floor((index - 1) / 2);
	}
    //************************************************************************
    // 
    //************************************************************************
	getLeft(index) {
		return index * 2 + 1;
	}
    //************************************************************************
    // 
    //************************************************************************
	getRight(index) {
		return index * 2 + 2;
	}
    //************************************************************************
    // 
    //************************************************************************
	show() {
        var output = "[";
        
		for (var i = 0; i < this.#heap.length; i++) {
            output += i + ": " + this.#heap[i] + ", ";
        }

        console.log(output + "]");
	}
    //************************************************************************
    // 
    //************************************************************************
    swap(index1, index2) {
        var value1 = this.#heap[index1];
        var value2 = this.#heap[index2];
        this.#heap[index1] = value2;
        this.#heap[index2] = value1;
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
test.add(-12);
// testbranch2

test.show();