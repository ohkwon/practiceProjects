var quickSort = function(arr, begI = 0, endI = false) {
    if (endI === false) {
        endI = arr.length - 1;
    }

    if (begI < endI) {
        var result = partition(arr, begI, endI);
        arr        = result.arr;

        arr = quickSort(arr, begI, result.pivotI - 1);
        arr = quickSort(arr, result.pivotI + 1, endI)
    }

    return arr;
}

var partition = function(arr, begI, endI) {
    highI       = endI
    pivotVal    = arr[begI];
    var highVal = null;

    for (var i = endI; i >= begI; i--) {
        if (arr[i] > pivotVal) {
            highVal    = arr[highI];
            arr[highI] = arr[i];
            arr[i]     = highVal;
            highI--;
        }
    }

    highVal    = arr[highI];
    arr[highI] = arr[begI];
    arr[begI]  = highVal;

    return {"pivotI" : highI, 'arr' : arr};
}

var test = [5,2,75,23,57,1,46,4,67,6];

console.log(test);

console.log(quickSort(test));