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
                print_r('x: ' . $x . ' y: ' . $y . ' val: ' . $val);
                if ($val == 'clear') {
                    print_r('clearX: ' . ($clearX ? 1 : 0));
                    if (! $clearX) {
                        for ($subI = 0; $subI < $matrix[$y].length; $subI++) {
                            if ($matrix[$y][$subI] != 'clear') {
                                $matrix[$y][$subI] = 0;
                                print_r('1 to 0 x: ' . $subI . ' y: ' . $y);
                            }
                        }

                        $clearX = true;
                    }

                    for ($subI = 0; $subI < $matrix.length; $subI++) {
                        if ($matrix[$subI][$x] != 'clear') {
                            $matrix[$subI][$x] = 0;
                            print_r('1 to 0 x: ' . $x . ' y: ' . $subI);
                        }
                    }

                    $matrix[$y][$x] = 0;
                    print_r('clear to 0 x: ' . $x . ' y: ' . $y);
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