function SpecialStack() {
    const max = 100

    this.arr = []
    this.min = null

    this.push = (val) => {
        console.log('push')
        if (! this.isFull()) {
            this.arr.push(val)
        }
    }

    this.pop = () => {
        console.log('pop')
        const output = this.arr.pop()

        if (output === this.min) this.min = null

        return output
    }

    this.peek = () => {
        console.log('peek')
        return this.arr[this.arr.length - 1]
    }

    this.isEmpty = () => {
        console.log('is empty')
        if (this.arr.length === 0) return true

        return false
    }

    this.isFull = () => {
        console.log('is full')
        if (this.arr.length === max) return true

        return false
    }

    this.getMin = () => {
        console.log('get min')
        if (this.min) return this.min
        
        this.arr.forEach(val => {
            if (this.min === null) this.min = val
            else if (val < this.min) this.min = val
        })

        return this.min
    }
}

const stack = new SpecialStack();

for(var i = 0; i < 101; i++) {
    stack.push(Math.floor(Math.random() * 100));
}

console.log(stack.peek())

console.log(stack.getMin())