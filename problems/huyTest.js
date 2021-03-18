// 2021/03/17
// feature where customer interacts w/ UI (div), see some images
// div is 1 image at a time
// can pass a selection of images
// ui has arrows, carousel
// what data structure to grab all images in back end
// what data structure to pass these images to front-end 
// easy for UI to manage as possible

function Images () {
  this.current = null
  this.head = null
  this.tail = null
  this.hash = {}
  
  this.add = (image) => {
    const newNode = new Node(image)
    this.hash[image.imageId] = newNode

    if (! this.head) {
      this.head = newNode
      this.current = this.head
      this.tail = this.head
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = this.tail.next
    }
  }

  this.delete = (imageId) => {
    if (! this.hash[imageId]) {
      return
    }

    const targetNode = this.hash[imageId]

    if (! targetNode.prev) {
      this.head = targetNode.next
      this.current = this.head

      if (! targetNode.next || ! this.head.next) {
        this.tail = this.head
      }
    } else {
      targetNode.prev.next = targetNode.next

      if (targetNode.next) {
        targetNode.next.prev = targetNode.prev
      } else {
        this.tail = targetNode.prev
      }
    }

    delete(this.hash[imageId])
  }

  this.toggle = (next = 1) => {
    if (! this.current) {
      return
    }

    if (next) {
      if (this.current.next) {
        this.current = this.current.next
      }
    } else {
      if (this.current.prev) {
        this.current = this.current.prev
      }
    }
  }

  this.toggleImageId = (imageId) => {
    if (! this.hash[imageId]) {
      return
    }

    this.current = this.hash[imageId]
  }

  this.print = () => {
    var currentNode = this.head
    
    while (currentNode) {
      console.log(currentNode.imageId)
      currentNode = currentNode.next
    }
  }

  this.printCurrent = () => {
    if (this.current) {
      console.log("current")
      console.log(this.current.imageId)
    }
  }
}

function Node (image) {
  this.imageId = image.imageId
  this.imageUrl = image.imageUrl
  this.prev = null
  this.next = null
}

images = new Images()

for (var i = 1; i < 6; i++) {
  images.add({imageId: i, imageUrl: i})
}

console.log("Whole List")
images.print()
images.printCurrent()
console.log("Toggled!")
images.toggle()
images.printCurrent()
console.log("toggled to imageId")
images.toggleImageId(5)
images.printCurrent()
images.delete(3)
console.log("Whole List")
images.print()
console.log("Toggled")
images.toggle()
images.printCurrent()