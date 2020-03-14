<?php
class MissingPositive {
    /**
     * $input => [int]
     */
    public function run($input) {
        $ranges = [];

        foreach ($input as $num) {
            if ($num > 0) {
                $left  = null;
                $right = null;

                if ($num - 1 > 0) {
                    if (isset($ranges[$num - 1])) {
                        $ranges[$num]      = $ranges[$num - 1];
                        $ranges[$num]->end = $num;
                        $left              = $ranges[$num];

                        if ($left->beg < $num - 1) {
                            unset($ranges[$num - 1]);
                        }
                    }
                }

                if (isset($ranges[$num + 1])) {
                    $ranges[$num]      = $ranges[$num + 1];
                    $ranges[$num]->beg = $num;
                    $right             = $ranges[$num];

                    if ($right->end > $num + 1) {
                        unset($ranges[$num + 1]);
                    }
                }

                if ($left && $right) {
                    $left->end          = $right->end;
                    $ranges[$left->end] = $left;
                    unset($ranges[$num]);
                } else if (! $left && ! $right) {
                    $ranges[$num] = new Range($num);
                }
            }
        }

        foreach ($ranges as $i => $range) {
            if ($i > 1) {
                return 1;
            } else {
                return $range->end + 1;
            }
        }
    }
}

class Range {
    public $beg = null;
    public $end = null;

    function __construct($num) {
        $this->beg = $num;
        $this->end = $num;
    }
}

$test = new MissingPositive();
$arr  = [1,2,3,5,6,7];

echo $test->run($arr);