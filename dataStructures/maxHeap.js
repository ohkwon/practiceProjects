class Heap {
    constructor() {
        this.arr = [];
    }

    add(val) {
        this.arr.push(val);
    }

    sort(i) {
        var largest = i;
        var li      = 2 * i + 1;
        var ri      = 2 * i + 2;

        if (this.arr[largest] < this.arr[li]) {
            largest = li;
        }

        if (this.arr[largest] < this.arr[ri]) {
            largest = ri;
        }

        if (largest != i) {
            var swapVal       = this.arr[i];
            this.arr[i]       = this.arr[largest];
            this.arr[largest] = swapVal;
        }

        if (i > 0) {
            this.sort(parseInt((i - 1) / 2));
        }
    }

    allSort() {
        for (var i = parseInt((i / 2) - 1); i >= 0; i--) {
            this.sort(i);
        }

        
    }
}