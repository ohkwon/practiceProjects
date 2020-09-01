function run(arr, target) {
    var begI = 0;
    var endI = arr.length - 1;
    var midI = 0;

    while (begI <= endI) {
        midI = parseInt((begI + endI) / 2);

        if (arr[midI] === target) {
            return midI;
        }
        else if (arr[midI] > target) {
            endI = midI - 1;
        }
        else if (arr[midI] < target) {
            begI = midI + 1;
        }
    }

    return -1;
}

var arr = [];
var add = 1;

for (var i = 0; i < 50; i++) {
    add += 1 + parseInt(Math.random() * 2);
    arr.push(add);
}
console.log(arr);
var target = parseInt(Math.random() * 100);
console.log(target)
console.log(run(arr, target));