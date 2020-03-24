<?php
class Solution {
    /**
     * @param Integer[][] $arr
     * @param Integer     $target
     * @return Integer
     */
    function hasTarget($arr, $target) {
        $sum  = null;
        $begI = 0;
        $endI = 0;
        $len  = count($arr);

        if (empty($arr)) {
            return false;
        }

        $sum = $arr[$begI];

        while ($sum != $target) {
            if ($sum < $target) {
                if ($endI < $len - 1) {
                    $endI++;
                    $sum += $arr[$endI];
                } else {
                    return false;
                }
            }
            elseif ($sum > $target) {
                if ($begI < $len - 1) {
                    if ($begI > $endI) {
                        $endI = $begI + 1;
                        $sum  = $arr[$endI];
                    } else {
                        $sum -= $arr[$begI];
                    }

                    $begI++;
                } else {
                    return false;
                }
            }

            // echo 'begI: ' . $begI . ' - endI: ' . $endI . ' = sum: ' . $sum . PHP_EOL;
        }

        return true;
    }
}

$sol = new Solution;

$testArr = [1,2,3,4,5,6];
$target = 13;

echo ($sol->hasTarget($testArr, $target) ? 'true' : 'false') . PHP_EOL;