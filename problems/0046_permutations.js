/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var output = []
    recur(nums, output, []);
    return output;
};

function recur(nums, output, currArr, delI = null) {
    var numsTemp = nums.concat([]);
    
    if (delI !== null) {
        numsTemp.splice(delI, 1);
    }

    if (numsTemp.length < 1) {
        output.push(currArr);
        
        return;
    }

    for (var i = 0; i < numsTemp.length; i++) {
        recur(numsTemp, output, currArr.concat([numsTemp[i]]), i);
    }
}

console.log(permute([1,2,3]));