function Stack() {
    this.head = null

    this.push = (val, index) => {
        this.head = new Node(val, index, this.head)
    }

    this.pop = () => {
        const output = this.head

        if (output) {
            this.head    = this.head.prev
        }

        return output
    }

    this.peek = () => {
        return this.head
    }
}

function Node(val, index, prev = null) {
    this.val   = val
    this.index = index
    this.prev  = prev
}

const run = (arr) => {
    const stack = new Stack()
    var [output, curr] = [[], null]

    for (var i in arr) {
        curr = stack.peek()

        while (curr) {
            if (curr.val < arr[i]) {
                output[curr.index] = arr[i]
                stack.pop()
                curr = stack.peek()
            } else {
                break
            }
        }

        stack.push(arr[i], i)
    }

    curr = stack.pop()

    while (curr) {
        output[curr.index] = -1
        curr = stack.pop()
    }

    return output
}

const randNum = (max, min = 0) => {
    return Math.floor(Math.random() * max) + min
}

var input = []

for (var i = 0; i < randNum(10, 5); i++) {
    input.push(randNum(20))
}

console.log('input, following is output')
console.log(input)
console.log(run(input))