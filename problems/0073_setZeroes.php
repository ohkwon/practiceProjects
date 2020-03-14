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
                    $matrix[$y][0] = 0;
                    $matrix[0][$x] = 0;
                }
            }
        }

        for ($i = 1; $i < count($matrix); $i++) {
            if ($matrix[$i][0] == 0) {
                for ($j = 1; $j < count($matrix[$i]); $j++) {
                    $matrix[$i][$j] = 0;
                }

                $clearRow = true;
            }
        }

        for ($i = 1; $i < count($matrix[0]); $i++) {
            if ($matrix[0][$i] == 0) {
                for ($j = 1; $j < count($matrix); $j++) {
                    $matrix[$j][$i] = 0;
                }

                $clearCol = true;
            }
        }
    }
}