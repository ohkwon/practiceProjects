function findMaxProduct(arr) {
  // Write your code here
  function sort(arr, i) {
    var sI = i;
    var lI  = 2 * i + 1;
    var rI  = 2 * i + 2;
    
    if (typeof arr[lI] !== 'undefined' && arr[lI] > arr[sI]) {
      sI = lI;
    }
    
    if (typeof arr[rI] !== 'undefined' && arr[rI] > arr[sI]) {
      sI = rI;
    }
    
    if (sI !== i) {
      var swap = arr[sI];
      arr[sI]  = arr[i];
      arr[i]   = swap;

      arr = sort(arr, sI);
    }
    
    return arr;
  }
  
  function sortAll(arr) {
    for (var i = parseInt((arr.length / 2) - 1); i >= 0; i--) {
      arr = sort(arr, i);
    }
    
    return arr;
  }
  
  var output   = [];
  var totalLen = arr.length;
  arr          = sortAll(arr);
  
  while (arr.length > 0) {
    console.log(arr);
    for (var i = arr.length - 1; i < arr.length + 2 && i < totalLen; i++) {
      if (typeof output[i] === 'undefined') {
        output[i] = arr[0];
      } else {
        output[i] *= arr[0];
      }
    }

    if (arr.length > 0) {
      var newVal = arr.pop();

      if (arr.length > 0) {
        arr[0] = newVal;
        arr    = sortAll(arr);
      }
    }
  }
  
  for (var i = 0; i < 2; i++) {
    if (typeof output[i] !== 'undefined') {
      output[i] = -1;
    }
  }
  
  return output;
}

console.log(findMaxProduct([2,4,7,1,5,3]));