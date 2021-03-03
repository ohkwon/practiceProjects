function Stack() {
    this.arr = [];
    this.len = 0;

    this.push = (val) => {
        this.len ++;
        this.arr.push(val);
    }

    this.pop = () => {
        this.len --;
        return this.arr.pop();
    }

    this.peek = () => {
        return this.arr[this.len - 1];
    }
}

const stack = new Stack();

for (var i = 0; i < 10; i++) {
    stack.push(Math.floor(Math.random() * 100));
}

console.log(stack.peek());