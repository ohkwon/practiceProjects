<?php
class Solution {
    /**
     * @param Integer[][] $matrix
     * @return NULL
     */
    function setZeroes(&$matrix) {
        foreach ($matrix as $y => $row) {
            foreach ($row as $x => $val) {
                if ($val == 0) {
                    $matrix[$y][$x] = 'clear';
                }
            }
        }

        foreach ($matrix as $y => $row) {
            $clearX = false;

            foreach ($row as $x => $val) {
                if ($val == 'clear') {
                    if (! $clearX) {
                        for ($subI = 0; $subI < count($matrix[$y]); $subI++) {
                            if ($matrix[$y][$subI] != 'clear') {
                                $matrix[$y][$subI] = 0;
                            }
                        }

                        $clearX = true;
                    }

                    for ($subI = 0; $subI < count($matrix); $subI++) {
                        if ($matrix[$subI][$x] != 'clear') {
                            $matrix[$subI][$x] = 0;
                        }
                    }

                    $matrix[$y][$x] = 0;
                }
            }
        }
    }
}

$sol = new Solution();
$inp = [[1,1,1],
        [1,1,1],
        [1,1,1]];
$sol->setZeroes($inp)
print_r($inp);