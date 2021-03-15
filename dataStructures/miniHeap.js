function MinHeap () {
  this.arr = []

  const _parent = (index) => {
    return Math.floor((index - 1) / 2)
  }

  const _left = (index) => {
    return index * 2 + 1
  }

  const _right = (index) => {
    return index * 2 + 2
  }
  
  this._inArray = (index) => {
    return index >= 0 && index < this.arr.length
  }

  this.heapify = (index, up = false) => {
    while (! isNaN(index) && this._inArray(index)) {
      var [minI, leftI, rightI] = [index, _left(index), _right(index)]

      if (leftI < this.arr.length && this.arr[leftI] < this.arr[minI]) {
        minI = leftI
      }
  
      if (rightI < this.arr.length && this.arr[rightI] < this.arr[minI]) {
        minI = rightI
      }

      if (minI !== index) {
        [this.arr[index], this.arr[minI]] = [this.arr[minI], this.arr[index]]

        if (up) {
          index = _parent(index)
        } else {
          index = minI
        }
      } else {
        break
      }
    }
  }

  this.getMin = () => {
    if (this.arr.length < 1) return false

    return this.arr[0]
  }

  this.deleteIndex = (index) => {
    if (! this._inArray(index)) {
      return false
    }

    const output = this.arr[index]
    const last   = this.arr.pop()

    if (! isNaN(last) && this.arr.length > 0) {
      this.arr[index] = last
      this.heapify(index)
    }

    return output
  }

  this.deleteMin = () => {
    return this.deleteIndex(0)
  }

  this.decreaseIndex = (index, val = 1) => {
    if (! this._inArray(index)) return

    this.arr[index] -= val
    this.heapify(_parent(index), true)
  }

  this.insert = (val) => {
    this.arr.push(val)
    this.heapify(_parent(this.arr.length - 1), 1)
  }

  this.sortArr = () => {
    var [output, min] = [[], this.deleteMin()]

    while (! isNaN(min) && min !== false) {
      output.push(min)
      min = this.deleteMin()
    }

    return output
  }
}

var test = []

const rand = (max = 100) => {
  return Math.floor(Math.random() * max)
}

for (var i = 0; i < 10; i++) {
  test.push(rand())
}

heap = new MinHeap()

for (const num in test) {
  heap.insert(test[num])
}

console.log(heap.sortArr())