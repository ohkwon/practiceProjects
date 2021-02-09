// https://www.geeksforgeeks.org/find-whether-an-array-is-subset-of-another-array-set-1/
function hash(val, i2, len)
{ // quadratic probing hash function
    return (val + i2 * i2) % len;
}
// hashtabel arr1, loop through arr2 until failure or finish
function isSubArr(arr1, arr2)
{
    var p = 0;
    var m = arr1.length; // sets hashTable max length, since we're doing open addressing
    var hashTable = [];

    if (m < 1 || arr2.length > m) { // handle obvious fail case
        return false;
    }

    for(var i = 0; i < m; i++) { // construct hashtable of parent array
        var i2 = 0;
        var hashKey = hash(arr1[i], i2, m);
        p++;

        while (typeof hashTable[hashKey] !== 'undefined') {
            i2++;
            hashKey = hash(arr1[i], i2, m);
            p++;
        }

        hashTable[hashKey] = arr1[i];
    }

    for(var i = 0; i < arr2.length; i++) { // check if index of sub array exists in parent, deleting as we go
        var i2 = 0;
        var hashKey = hash(arr2[i], i2, m);
        p++;

        while (i2 < m && typeof hashTable[hashKey] !== 'undefined' && hashTable[hashKey] !== arr2[i]) {
            i2++;
            hashKey = hash(arr2[i], i2, m);
            p++;
        }

        if (typeof hashTable[hashKey] !== 'undefined' && hashTable[hashKey] === arr2[i]) {
            hashTable[hashKey] = false; // clearing our hashtable once we find a match, label to false sothat we know it's been deleted, rather than never set
        } else {
            console.log("performance: " + p);
            return false; // this means we've found a mismatch, and thus is not a sub array
        }
    }

    console.log("performance: " + p);

    return true;
}

// hashtabel arr2, loop through all of arr1
function isSubArr2(arr1, arr2)
{
    var p = 0;
    var n = arr2.length;
    var hashTable = [];

    if (arr1.length < 1 || n > arr1.length) {
        console.log("performance: " + p);
        return false;
    }

    for (var i = 0; i < n; i++) {
        var i2 = 0;
        var hashKey = hash(arr2[i], i2, n);
        p++;

        while (typeof hashTable[hashKey] !== 'undefined') {
            p++;
            i2++;
            hashKey = hash(arr2[i], i2, n);
        }

        hashTable[hashKey] = arr2[i];
    }

    var ni = n;

    for (var i = 0; i < arr1.length; i++) {
        var i2 = 0;
        var hashKey = hash(arr1[i], i2, n);
        p++;

        while (i2 < arr1.length && typeof hashTable[hashKey] !== 'undefined' && hashTable[hashKey] !== arr1[i]) {
            p++;
            i2++;
            var hashKey = hash(arr1[i], i2, n);
        }

        if (typeof hashTable[hashKey] !== 'undefined' && hashTable[hashKey] === arr1[i]) {
            hashTable[hashKey] = false;
            ni--;
        }
    }

    console.log("performance: " + p);

    if (ni > 0) {
        return false;
    }

    return true;
}

var sets = [
    {
        arr1: [11, 1, 13, 21, 3, 7],
        arr2 : [11, 3, 7, 1, 13],
        result: true,
    },
    {
        arr1: [1, 2, 3, 4, 5, 6],
        arr2: [1, 2, 4, 5, 6],
        result: true,
    },
    {
        arr1: [10, 5, 2, 23, 19],
        arr2: [19, 5, 3, 1, 6],
        result: false,   
    }
];

sets.forEach(function(info) {
    var result = isSubArr(info.arr1, info.arr2);

    console.log('test result');
    console.log(info.arr1);
    console.log(info.arr2);
    console.log('result: ' + (result === info.result) ? 'success' : 'failure');
});
console.log('type 2');

sets.forEach(function(info) {
    var result = isSubArr2(info.arr1, info.arr2);

    console.log('test result');
    console.log(info.arr1);
    console.log(info.arr2);
    console.log('result: ' + (result === info.result) ? 'success' : 'failure');
});