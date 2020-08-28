function run(arr) {
    const len = arr.length;

    if (len > 1) {
        arr = quickSort(arr, 0, len - 1);
    }

    return arr;
}

function quickSort(arr, begI, endI) {
    if (begI >= endI) {
        return arr;
    }

    var lSort = [];
    var rSort = [arr[begI]];
    var mid   = begI;

    for (var i = begI + 1; i <= endI; i++) {
        if (arr[begI] >= arr[i]) {
            lSort.push(arr[i]);
            mid++;
        } else {
            rSort.push(arr[i]);
        }
    }

    var i = begI;

    for (var i2 = 0; i2 < lSort.length; i2++) {
        arr[i] = lSort[i2];
        i++;
    }

    for (var i2 = 0; i2 < rSort.length; i2++) {
        arr[i] = rSort[i2];
        i++;
    }

    arr = quickSort(arr, begI, mid - 1);
    arr = quickSort(arr, mid + 1, endI);

    return arr;
}


var arr = [1,6,3,7,234,346,46,23,234,346,23,267,247,57,4568];
console.log(run(arr));
