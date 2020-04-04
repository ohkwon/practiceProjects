<?php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function longestConsecutive($nums) {
        $ref     = [];
        $highest = 0;

        foreach ($nums as $num) {
            if (isset($ref[$num])) {
                // skip
            }
            elseif (isset($ref[$num - 1]) && isset($ref[$num + 1])) {
                if ($ref[$num - 1]['max'] < $ref[$num + 1]['min']) { 
                    $newMin                    = $ref[$num - 1]['min'];
                    $ref[$newMin]['max']       = $ref[$num + 1]['max'];
                    $ref[$ref[$newMin]['max']] = &$ref[$newMin];

                    $this->isHigher($highest, $ref[$newMin]);
                    $this->unsetIndex($ref, $ref[$newMin]['min'], $num - 1);
                    $this->unsetIndex($ref, $ref[$newMin]['max'], $num + 1);
                }
            }
            elseif (isset($ref[$num - 1])) {
                if ($num > $ref[$num - 1]['max']) {
                    $ref[$num - 1]['max'] = $num;
                    $ref[$num]            = &$ref[$num - 1];

                    $this->isHigher($highest, $ref[$num]);
                    $this->unsetIndex($ref, $ref[$num]['min'], $num - 1);
                }
            }
            elseif (isset($ref[$num + 1])) {
                if ($num < $ref[$num + 1]['min']) { 
                    $ref[$num + 1]['min'] = $num;

                    $ref[$num]            = &$ref[$num + 1];
                    $this->isHigher($highest, $ref[$num]);
                    $this->unsetIndex($ref, $ref[$num]['max'], $num + 1);
                }
            }
            else {
                $ref[$num] = ['min' => $num, 'max' => $num];
                $this->isHigher($highest, $ref[$num]);
            }
        }

        return $highest;
    }

    function isHigher(&$highest, $info) {
        if ($info['max'] - $info['min'] + 1 > $highest) {
            $highest = $info['max'] - $info['min'] + 1;
        }
    }

    function unsetIndex(&$ref, $newNum, $oldNum) {
        if ($newNum != $oldNum) {
            unset($ref[$oldNum]);
        }
    }
}

$sol = new Solution;

$input = [-6,6,-9,-7,0,3,4,-2,2,-1,9,-9,5,-3,6,1,5,-1,-2,9,-9,-4,-6,-5,6,-1,3];

print_r($sol->longestConsecutive($input));