<?php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function searchRange($nums, $target) {
        $targetI = $this->search($nums, $target);

        if ($targetI < 0) {
            return [-1, -1];
        }

        $return = [$targetI, $targetI];

        while (isset($nums[$return[0] - 1]) && $nums[$return[0] - 1] == $target) {
            $return[0]--;
        }

        while (isset($nums[$return[1] + 1]) && $nums[$return[1] + 1] == $target) {
            $return[1]++;
        }

        return $return;
    }

    function search($nums, $target, $min = 0, $max = null) {
        if ($max === null) {
            $max = count($nums) - 1;

            if ($max < 0) {
                return -1;
            }
        }

        $mid = (int) (($max + $min) / 2);

        if ($nums[$mid] > $target) {
            if ($mid <= $min) {
                return -1;
            }

            return $this->search($nums, $target, $min, $mid);
        } elseif ($nums[$mid] == $target) {
            return $mid;
        } elseif ($nums[$mid] < $target) {
            if ($mid >= $max) {
                return -1;
            }

            return $this->search($nums, $target, $mid + 1, $max);
        }
    }
}

$test = new Solution();

$input = [1,2,3,4,5,5,5,5,6,7];
$input2 = 5;

print_r($test->searchRange($input, $input2));
