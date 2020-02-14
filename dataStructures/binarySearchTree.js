class BinarySearchTree {
    #tree   = [];
    #length = 0;
    //****************************************************
    //
    //****************************************************
    add(input) {
        var pointer = 0;

        while (typeof this.#tree[pointer] !== "undefined" && this.#tree[pointer] !== null) {
            if (input < this.#tree[pointer]["num"]) {
                pointer = this.getLeft(pointer);
            } else if (input > this.#tree[pointer]["num"]) {
                pointer = this.getRight(pointer);
            } else {
                break;
            }
        }

        if (typeof this.#tree[pointer] === "undefined" || this.#tree[pointer] === null) {
            this.#tree[pointer] = {"num" : input, "counter" : 1};
        } else {
            this.#tree[pointer]["counter"]++;
        }

        this.#length++;
    }
    //****************************************************
    //
    //****************************************************
    show() {
        console.log(this.#tree);
    }
    //****************************************************
    //
    //****************************************************
    getLeft(index) {
        return index * 2 + 1;
    }
    //****************************************************
    //
    //****************************************************
    getRight(index) {
        return index * 2 + 2;
    }
    //****************************************************
    //
    //****************************************************
    getParent(index) {
        return Math.floor((index - 1) / 2);
    }
}

var test = new BinarySearchTree;

for (i = 0; i < 10; i++) {
    test.add(Math.floor(Math.random() * 25));
}

test.show();

