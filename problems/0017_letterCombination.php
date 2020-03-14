<?php
class Solution {
    /**
     * @param String $digits
     * @return String[]
     */
    function letterCombinations($digits) {
        $numChars = [
                2 => ['a', 'b', 'c'],
                3 => ['d', 'e', 'f'],
                4 => ['g', 'h', 'i'],
                5 => ['j', 'k', 'l'],
                6 => ['m', 'n', 'o'],
                7 => ['p', 'q', 'r', 's'],
                8 => ['t', 'u', 'v'],
                9 => ['w', 'x', 'y', 'z'],
            ];

        $output       = [];
        $currChars    = [];
        $outputLength = 0;

        for ($digitsI = 0; $digitsI < strlen($digits); $digitsI++) {
            $currChars = $numChars[$digits[$digitsI]];

            if (empty($output)) {
                foreach ($currChars as $currCharsI => $char) {
                    $output[$currCharsI] = $char;
                }
            } else {
                $outputLength = count($output);

                for ($currCharsI = count($currChars) - 1; $currCharsI >= 0; $currCharsI--) {
                    for ($outputI = 0; $outputI < $outputLength; $outputI++) {
                        $output[$outputI + $currCharsI * $outputLength] = $output[$outputI] . $currChars[$currCharsI];
                    }
                }
            }
        }

        return $output;
    }
}