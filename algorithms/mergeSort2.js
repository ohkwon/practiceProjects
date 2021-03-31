const mergeSort = (arr, beg = 0, end = null) => {
  if (end === null) {
    end = arr.length - 1
  } else if (beg >= end) {
    return
  }
  
  const mid = Math.floor((end + beg) / 2)
  console.log(beg + ' ' + mid + ' ' + end)
  
  mergeSort(arr, beg, mid)
  mergeSort(arr, mid + 1, end)
  
  merge(arr, beg, mid + 1, end)

  return arr
}

const merge = (arr, i, r, end) => {
  const leftArr = arr.slice(i, r)
  var l = 0

  while (r <= end && l < leftArr.length) {
    if (leftArr[l] > arr[r]) {
      arr[i] = arr[r]
      r++
    } else {
      l++
    }
    i++
  }

  while (l < leftArr.length) {
    arr[i] = leftArr[l]
    i++
    l++
  } 
}

const rand = () => {
  return Math.floor(Math.random() * 100)
}
const arr = []

for (var i = 0; i < 10; i++) {
  arr.push(rand())
}

console.log(arr)
console.log(mergeSort(arr))