class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        begI   = 0
        slen   = len(s) - 10
        stored = {}

        while begI <= slen:
            substr = s[begI:(begI + 10)]
            if substr in stored:
                if stored[substr] < 2:
                    stored[substr] += 1
            else:
                stored[substr] = 1

            begI += 1

        return [k for k, v in stored.items() if v > 1]