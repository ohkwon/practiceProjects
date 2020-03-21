<?php
class Solution {
    /**
     * @param Integer[][] $triangle
     * @return Integer
     */
    function minimumTotal($triangle) {
        $minSum = empty($triangle) ? 0 : (count($triangle) == 1 ? $triangle[0][0] : null);

        for ($y = 1; $y < count($triangle); $y++) {
            foreach ($triangle[$y] as $x => $val) {
                $minNodeSum = null;
                for ($i = $x - 1; $i <= $x; $i++) {
                    if ($i >= 0 && $i < count($triangle[$y - 1])) {
                        $triangle[$y][$x] = $val + $triangle[$y - 1][$i];

                        if ($minNodeSum === null) {
                            $minNodeSum       = $triangle[$y][$x];
                        } elseif ($minNodeSum < $triangle[$y][$x]) {
                            $triangle[$y][$x] = $minNodeSum;
                        }
                    }
                }
                
                if (($y + 1) >= count($triangle) && ($minSum === null || $triangle[$y][$x] < $minSum)) {
                    $minSum = $triangle[$y][$x];
                }
            }
        }

        return $minSum;
    }
}