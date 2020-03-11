/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var output   = [];
    var currArr  = nums;
    var computed = [nums];

    while (currArr.length > 2) {
        var computedI       = computed.length;
        computed[computedI] = [];

        for (var i = 0; i < currArr.length; i++) {
            var computedSubI = Math.floor(i / 2);

            if (typeof computed[computedI][computedSubI] === 'undefined') {
                computed[computedI][computedSubI] = currArr[i];
            } else {
                computed[computedI][computedSubI] *= currArr[i];
            }
        }

        currArr = computed[computedI];
    }

    for (var i = 0; i < nums.length; i++) {
        var j = 0;

        while (j < nums.length) {
            if (j !== i) {
                for (var computedI = computed.length - 1; computedI >= 0; computedI--) {
                    var power     = Math.pow(2, computedI);
                    var jQuotient = Math.floor(j / power);
                    var iQuotient = Math.floor(i / power);

                    if (jQuotient !== iQuotient && typeof computed[computedI][jQuotient] !== 'undefined') {
                        if (typeof output[i] === 'undefined') {
                            output[i] = computed[computedI][jQuotient];
                        } else {
                            output[i] *= computed[computedI][jQuotient];
                        }

                        j += power;
                        break;
                    }
                }
            } else {
                j++;
            }
        }
    }

    return output;
};