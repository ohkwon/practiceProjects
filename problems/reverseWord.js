const reverseWord = (input) => {
  var output = ""
  var stack  = new Stack()

  const dumpStack = (stack) => { // if param is object, passed by reference, otherwise, passed by value
    var output = ""

    while (node = stack.pop()) {
      output += node.val
    }

    return output
  }

  for (var i in input) {
    if (input[i] == " ") {
      output += dumpStack(stack) + " "
    } else {
      stack.push(input[i])
    }
  }

  output += dumpStack(stack)

  return output
}

function Stack () {
  this.head = null

  this.push = (val) => {
    this.head = new Node(val, this.head)
  }

  this.pop = () => {
    const node = this.head

    if (node) this.head = node.prev

    return node
  }

  this.peek = () => {
    return this.head
  }
}

function Node(val, prev = null) {
  this.val = val
  this.prev = prev
}

console.log(reverseWord(" a b s t r a c d i ng u s "))