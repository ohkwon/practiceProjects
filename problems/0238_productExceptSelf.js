/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var l      = [];
    var r      = [];
    var output = [];

    l[0]               = 1;
    r[nums.length - 1] = 1;

    for (var i = 1; i < nums.length; i++) {
        l[i] = l[i - 1] * nums[i - 1];
    }

    for (var i = nums.length - 2; i >= 0; i--) {
        r[i] = r[i + 1] * nums[i + 1];
    }

    for (var i = 0; i < nums.length; i++) {
        output[i] = l[i] * r[i];
    }

    return output;
}