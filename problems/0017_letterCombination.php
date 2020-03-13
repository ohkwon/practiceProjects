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


var letterCombinations = function(digits) {
    const numChars = [
            [],
            [],
            ['a', 'b', 'c'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i'],
            ['j', 'k', 'l'],
            ['m', 'n', 'o'],
            ['p', 'q', 'r', 's'],
            ['t', 'u', 'v'],
            ['w', 'x', 'y', 'z'],
        ];

    let output       = [];
    var currChars    = [];
    var outputLength = 0;

    for (var digitsI = 0; digitsI < digits.length; digitsI++) {
        currChars = numChars[digits.charAt(digitsI)];

        if (output.length < 1) {
            for (var currCharsI = 0; currCharsI < currChars.length; currCharsI++) {
                output[currCharsI] = currChars[currCharsI];
            }
        }
        else {
            // store output length since we will be writing to it
            outputLength = output.length;

            for (var currCharsI = currChars.length - 1; currCharsI >= 0; currCharsI--) {
                for (var outputI = 0; outputI < outputLength; outputI++) {
                    output[outputI + currCharsI * outputLength] = output[outputI] + currChars[currCharsI];
                }
            }
        }
    }

    return output;
};