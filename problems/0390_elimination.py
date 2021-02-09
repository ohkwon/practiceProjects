class Solution:
def lastRemaining(self, n: int) -> int:
arr   = list(range(1, n + 1))
right = True
trips = 0

while len(arr) > 1:
trips += 1
i      = 0 if right else (len(arr) - 1)

while i not in arr:
    i += 1 if right else -1

while (right and i < n) or (not right and i >= 0):
    if len(arr) == 1:
        for num in arr:
            return num

    print('i:' + str(i))
    arr.pop(i)

    i += (1 if right else -1) * 2

    while ((right and i < n) or (not right and i >= 0)) and i not in arr:
        i += (1 if right else -1) * trips

right = not right