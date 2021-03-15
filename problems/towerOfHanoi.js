function Stack () {
  this.head = null
  this.len  = 0

  this.push = (val) => { // specific rule for hanoi
    if (this.canStack(val)) {
      this.head = new Node(val, this.head)
      this.len++
    }
  }

  this.pop = () => {
    const output = this.head
    this.len--

    if (output) this.head = output.prev

    return output
  }

  this.peek = () => {
    return this.head
  }

  this.canStack = (val) => {
    return this.head ? this.head.val > val : true
  }
}

function Node (val, prev = null) {
  this.val  = val
  this.prev = prev
}

const run = () => {
  const towers = initTowers()
}

const initTowers = () => {
  const towers = []
  
  for (var i = 0; i < 3; i++) {
    towers.push(new Stack())
  }
  
  for (var i = 4; i > 0; i--) {
    towers[0].push(i)
  }

  return towers
}