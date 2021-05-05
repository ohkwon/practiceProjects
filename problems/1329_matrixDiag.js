var diagonalSort = function(mat) {
  const mergeSort = (arr, beg = 0, end = null) => {
    if (end === null) end = arr.length - 1;
    if (beg >= end) return;

    const mid = Math.floor((beg + end) / 2);
    
    mergeSort(arr, beg, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, beg, mid, end);
  }

  const merge = (arr, beg, mid, end) => {
    const subArr = [];
    for (var i = beg; i <= end; i++) subArr[i] = arr[i];
    var [leftI, rightI] = [beg, mid + 1];

    while (leftI <= mid && rightI <= end) {
      if (subArr[leftI] <= subArr[rightI]) {
        arr[beg] = subArr[leftI];
        leftI++;
      } else {
        arr[beg] = subArr[rightI];
        rightI++;
      }

      beg++;
    }

    while (leftI <= mid && beg <= end) {
      arr[beg] = subArr[leftI];
      beg++;
      leftI++;
    }
  }

  for (var i = mat.length - 2; i > 0; i--) {
    var tempArr = [mat[i][0]];
    var [tempX, tempY] = [1, y + 1];

    while (tempY < mat.length && tempX < mat[tempY].length) {
      tempArr.push(mat[tempY][tempX]);
    }

    mergeSorce(tempArr);

    // while ()
  }
};

diagonalSort([[]]);