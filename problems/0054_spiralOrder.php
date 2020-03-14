<?php
// REDOOO
class Solution {
    public $currX  = 0;
    public $currY  = 0;
    public $xMin   = -1;
    public $xMax   = 0;
    public $yMin   = 0;
    public $yMax   = 0;
    public $count  = 0;
    public $return = [];
    /**
     * @param Integer[][] $matrix
     * @return Integer[]
     */
    function spiralOrder($matrix) {
        $this->yMax = count($matrix) - 1;

        if ($this->yMax >= 0) {
            $this->xMax = count($matrix[0]) - 1;
            $this->count = ($this->yMax + 1) * ($this->xMax + 1);
        }

        while (
            $this->xMin <= $this->currX
            && $this->currX <= $this->xMax
            && $this->yMin <= $this->currY
            && $this->currY <= $this->yMax
        ) {
            $this->iterate($this->currX, $this->xMax, $this->xMin, $matrix, $plus = true);
            $this->iterate($this->currY, $this->yMax, $this->yMin, $matrix, $plus = true);
            $this->iterate($this->currX, $this->xMin, $this->xMax, $matrix, $plus = false);
            $this->iterate($this->currY, $this->yMin, $this->yMax, $matrix, $plus = false);
        }

        return $this->return;
    }

    function iterate(&$iterator, &$limit, &$limitChange, $matrix, $plus) {
        $change = false;

        // if ($iterator == $limit) {
        //     print_r($this->return);
        //     if (count($this->return) < $this->count) {
        //         $this->return[] = $matrix[$this->currY][$this->currX];
        //     }
        //     print_r($this->return);
        //     if ($plus) {
        //         $limitChange++;
        //     } else {
        //         $limitChange--;
        //     }

        //     return;
        // }

        if (count($this->return) < $this->count) {
            if ($plus) {
                while ($iterator <= $limit) {
                    $this->return[] = $matrix[$this->currY][$this->currX];
                    $iterator++;

                    if (! $change) {
                        $limitChange++;
                        $change = true;
                    }
                }
                $iterator--;
            }
            else {
                while ($iterator >= $limit) {
                    $this->return[] = $matrix[$this->currY][$this->currX];
                    $iterator--;

                    if (! $change) {
                        $limitChange--;
                        $change = true;
                    }
                }
                $iterator++;
            }
        }
    }
}

$test = new Solution();

// $input = [[1,2,3,4], [5,6,7,8], [9,10,11,12]];
$input = [[1]];

print_r($test->spiralOrder($input));