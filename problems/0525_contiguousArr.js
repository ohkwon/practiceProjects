var findMaxLength = function(nums) {
  var [balance, maxLen] = [0, 0];
  const balanceMap = {0 : -1};

  for (var i in nums) {
    balance += nums[i] > 0 ? 1 : -1;

    if (balance in balanceMap) {
      if (i - balanceMap[balance] > maxLen) maxLen = i - balanceMap[balance];
    } else {
      balanceMap[balance] = i;
    }
  }

  return maxLen;
};

console.log(findMaxLength([0,1,0]));