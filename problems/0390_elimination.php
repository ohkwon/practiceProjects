<?php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function lastRemaining($n) {
        $arr  = [];
        $info = [$n];

        for ($i = 1; $i <= $n; $i++) {
            $arr[] = $i;
        }

        $trips = 0;
        $right = true;

        while (count($arr) > 1) {
            $trips++;
            $i = $right ? 0 : count($arr) - 1;

            while (! isset($arr[$i])) {
                $i += ($right ? 1 : -1) * 1;
            }

            while (($right && $i < $n) || (! $right && $i >= 0)) {
                if (count($arr) == 1) {
                    foreach ($arr as $num) {
                        print_r(['info' => $info, 'output' => $n . ' -> ' . $num]);
                        return $num;
                    }
                }

                unset($arr[$i]);

                $i += ($right ? 1 : -1) * 2;

                while (! isset($arr[$i]) && (($right && $i < $n) || (! $right && $i >= 0))) {
                    $i += ($right ? 1 : -1);
                }
            }

            // print_r(['trip' => $trip, 'arr' => $arr]);

            $right = ! $right;
            $arr   = array_values($arr);
            $info[] = count($arr);
        }

        foreach ($arr as $num) {
            print_r(['info' => $info, 'output' => $n . ' -> ' . $num]);
            return $num;
        }
    }

    function lastRemaining2($n) { // close
        $og    = $n;
        $trips = -1;
        $left  = 1;

        while ($n > 3) {
            $trips++;

            if ($trips % 2) {
                if (! $n % 2) {
                    $left += pow(2, $trips);
                }
            } else {
                $left += pow(2, $trips);
            }

            $n = intdiv($n, 2);
        }

        $trips++;

        if ($trips % 2 || $n == 3) {
            $left += pow(2, $trips);
        }
        print_r($og . ' -> ' . $left);
        echo PHP_EOL;
        return $left;
    }
}

$test = new Solution;

$input = 9;

for ($input = 2; $input < 51; $input += 2) {
    $output = $test->lastRemaining2($input);
    // print_r($output);
}