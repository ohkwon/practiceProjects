function run(arr) {
    if (arr.length > 1) {
        arr = mergeSort(arr, 0, arr.length - 1);
    }

    return arr;
}

function mergeSort(arr, begI, endI) {
    if (begI >= endI) {
        return arr;
    }

    var midI = parseInt((begI + endI) / 2);

    arr = mergeSort(arr, begI, midI);
    arr = mergeSort(arr, midI + 1, endI);
    arr = merge(arr, begI, midI, endI);

    return arr;
}

function merge(arr, begI, midI, endI) {
    var subArr = [];

    for(var i = begI; i <= endI; i++) {
        subArr[i] = arr[i];
    }

    var i1 = begI;
    var i2 = midI + 1;
    var i  = begI;

    while (i1 <= midI && i2 <= endI) {
        if (subArr[i1] <= subArr[i2]) {
            arr[i] = subArr[i1];
            i1++;
        }
        else {
            arr[i] = subArr[i2];
            i2++;
        }

        i++;
    }

    while (i1 <= midI && i <= endI) {
        arr[i] = subArr[i1];
        i1++;
        i++;
    }

    return arr;
}

var arr = [6,3,2,7,4,5,6,4,89,12];
console.log(run(arr));

