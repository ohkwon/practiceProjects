// https://www.geeksforgeeks.org/maximum-distance-two-occurrences-element-array/

function hash(input, n) {
    return input % n;
}

function maxDistance(arr) {
    var hashTable = [];
    var n         = arr.length;
    var greatest  = 0;
    var hashKey   = null;
    var diff      = 0;
    var p = 0;

    for (var i = 0; i < arr.length; i++) {
        hashKey = hash(arr[i], n);
        p++;

        for (var l = 0; l < n; l++) {
            if (typeof hashTable[hashKey] === 'undefined' || hashTable[hashKey].val === arr[i]) {
                break;
            }
            p++;
            hashKey = (hashKey + 1) % n;
        }

        if (typeof hashTable[hashKey] !== 'undefined' && hashTable[hashKey].val !== arr[i]) {
            console.log('p on fail: ' + p);
            return false; // hit wall, hashTable couldn't handle it // theoretically, this is impossible
        }

        if (typeof hashTable[hashKey] === 'undefined') {
            hashTable[hashKey] = {val: arr[i], left: i};
        } else {
            diff = i - hashTable[hashKey].left;

            if (diff > greatest) {
                greatest = diff;
            }
        }
    }

    console.log('p on succ: ' + p);

    return greatest;
}

var test = [];

var range = 15;

for (var i = 0; i < range; i++) {
    test.push(Math.floor(Math.random() * Math.floor(range - 5)));
}

console.log('input');
console.log(test);
console.log('my answer:');
console.log(maxDistance(test));