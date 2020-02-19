var canJump = function(nums) {
    var i      = 0;
    var target = nums.length - 1;
    
    while (i < target) {
        if (nums[i] < 1) {
            return false;
        }
        
        var biggestI = 0;
        
        for (var i2 = nums[i]; i2 > 0; i2--) {
            if (i + nums[i + biggestI] >= target || i + nums[i + i2] >= target) {
                return true;
            }
            
            if (biggestI + nums[i + biggestI] < i2 + nums[i + i2]) {
                biggestI = i2;
            }
        }
        
        if (! biggestI || biggestI + nums[i + biggestI] <= nums[i]) {
            return false;
        }
        
        i += biggestI;
    }
    
    if (i >= target) {
        return true;
    }
    
    return false;
};

console.log('[2,3,1,1,4] ? ');
console.log(canJump([2,3,1,1,4]));
console.log('[3,2,1,0,4] ? ');
console.log(canJump([3,2,1,0,4]));
console.log('[1,1,1,0] ? ');
console.log(canJump([1,1,1,0]));
console.log('[1,1,0,1] ? ');
console.log(canJump([1,1,0,1]));