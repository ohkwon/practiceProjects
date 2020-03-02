class Queue {
    #head;

    add(data) {
        var newDisc = new Disc(data);
        newDisc.setNext(this.#head);
        this.#head = newDisc;
    }

    peak() {
        if (this.#head) {
            return this.#head.getData();
        }

        return;
    }

    pop() {
        var output = null;

        if (this.#head) {
            output      = this.#head;
            var newHead = null;

            if (this.#head.getNext()) {
                newHead = this.#head.getNext;
            }

            this.#head = newHead;
        }

        return output;
    }
}

class Disc {
    #data;
    #next;

    constructor(data) {
        this.#data = data;
    }

    getData() {
        return this.#data;
    }

    getNext() {
        return this.#next;
    }

    setNext(disc) {
        this.#next = disc;
    }
}