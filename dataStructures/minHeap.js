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
    getMin() {
        if (this.#length > 0) {
            return this.#heap[0];
        }

        return false;
    }
    //************************************************************************
    // 
    //************************************************************************
    extractMin() {
        return this.delete(0);
    }
    //************************************************************************
    // 
    //************************************************************************
    heapify(index) {
        var newIndex = index;
        // var str      = "index: " + index;

        if (index < this.#length && this.#heap[this.getLeft(index)] < this.#heap[index]) {
            newIndex = this.getLeft(index);
            // str += "-L>" + newIndex;
        }

        if (index < this.#length && this.#heap[this.getRight(index)] < this.#heap[newIndex]) {
            newIndex = this.getRight(index);
            // str += "-R>" + newIndex;
        }

        // console.log(str);

        if (newIndex !== index) {
            this.swap(index, newIndex);
            this.heapify(newIndex);
        }
    }
    //************************************************************************
    // 
    //************************************************************************
    delete(index) {
        var output = false;
        if (this.#length > index) {
            output            = this.#heap[index];
            this.#heap[index] = this.#heap[this.#length - 1];
            this.#heap.splice(this.#length - 1, 1);
            this.#length--;
            this.heapify(index);
        }

        return output;
    }
    //************************************************************************
    // return sorted array
    //************************************************************************
    returnSort() {
        var output = [];

        while (this.#length > 0) {
            output.push(this.extractMin());
        }

        return output;
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
        var rows = Math.floor(Math.log(this.#length) / Math.log(2));
        var sp = " ";
        var str = "";
        var newRow = true;
        var prevRow = 0;

        for (var i = 0; i < this.#length; i++) {
            if (prevRow < Math.floor(Math.log(i + 1) / Math.log(2))) {
                prevRow = Math.floor(Math.log(i + 1) / Math.log(2));
                console.log(str);
                str     = "";
                newRow  = true;
                rows--;
            }

            if (newRow) {

                str   += sp.repeat(rows * rows);
                newRow = false;
            }

            var num = this.#heap[i];
            num     = num.toString();
            str    += (num.padEnd(4 - num.length)) + sp.repeat(Math.pow(3, rows));
        }

        if (str) {
            console.log(str);
        }
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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var test = new MinHeap();

for (var i = 0; i < 20; i++) {
    test.add(getRandomInt(i * 10));
    // if (i % 5 == 0) {
    //     test.show();
    //     console.log(test.extractMin());
    // }
}

test.show();
console.log(test.returnSort());