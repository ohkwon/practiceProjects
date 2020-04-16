class Solution:
    def maximumGap(self, nums: List[int]) -> int:
        output = 0

        if len(nums) < 2:
            return output

        for i in nums:
