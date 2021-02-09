function maxCandies(arr, k) {
  // Write your code here
  function sort(arr, i) {
    var topI = i;
    var lI   = i * 2 + 1;
    var rI   = i * 2 + 2;
    
    if (typeof arr[lI] !== 'undefined' && arr[lI] > arr[topI]) {
      topI = lI;
    }
    
    if (typeof arr[rI] !== 'undefined' && arr[rI] > arr[topI]) {
      topI = rI;
    }
    
    if (topI !== i) {
      var swap  = arr[i];
      arr[i]    = arr[topI];
      arr[topI] = swap;
      
      arr = sort(arr, topI);
    }
    
    return arr;
  }
  
  function sortAll(arr) {
    for (var i = parseInt((arr.length / 2) - 1); i >= 0; i--) {
      arr = sort(arr, i);
    }
    
    return arr;
  }
  
  var output = 0;
  
  for (var i = 0; i < k; i++) {
    arr         = sortAll(arr);
    console.log(arr);
    var currVal = arr[0];
    output     += currVal;
    arr[0]      = arr.pop();
    arr.push(parseInt(currVal / 2));
  }
  
  return output;
}

console.log(maxCandies([2,1,7,4,2], 3));