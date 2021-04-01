// var subarraySum = function(nums, k) {
//   var [count, sum, left, right] = [0, 0, 0, 0];

//   if (nums.length < 1) return count;
//   sum += nums[left];

//   while (left < nums.length) {
//     if (sum < k) {
//       right++;

//       if (right >= nums.length) break;

//       sum += nums[right];
//     } else if (sum >= k) {
//       if (sum === k) count++;

//       sum -= nums[left];
//       left++;

//       if (left > right) {
//         right = left;
//         sum = nums[left];
//       }
//     }
//   }

//   return count;
// };

// prev doesn't work b/c not all positive

// var subarraySum = function(nums, k) {
//   var [count, sum] = [0, 0];

//   for (var left = 0; left < nums.length; left++) {
//     sum = 0;
//     for (var right = left; right < nums.length; right++) {
//       sum += nums[right];

//       if (sum === k) count++;
//     }
//   }

//   return count;
// }

var subarraySum = function(nums, k) {
  var [count, sum, sums] = [0, 0, {}];

  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum == k) count++;

    if (sums[sum - k]) count += sums[sum - k];
    
    if (! sums[sum]) sums[sum] = 0;
    sums[sum]++;
  }

  return count;
}

console.log(subarraySum([1], 0));