var canJump = function(nums) {
    var i      = 0;
    var target = nums.length - 1;
    
    while (i < target) {
        if (nums[i] < 1) {
            return false;
        }
        
        var biggestI = i + 1;
        
        for (var i2 = nums[i]; i2 > 1; i2--) {
            if (i + nums[biggestI] >= target || i + nums[i2] >= target) {
                return true;
            }
            
            if (biggestI + nums[i + biggestI] < i2 + nums[i + i2]) {
                biggestI = i2;
            }
        }
        
        if (biggestI + nums[biggestI] <= nums[i]) {
            return false;
        }
        
        i += nums[biggestI];
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