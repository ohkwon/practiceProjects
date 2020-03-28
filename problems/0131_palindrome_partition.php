<?php
class Solution {
    private $return = [];
    /**
     * @param String $s
     * @return String[][]
     */
    function partition($s) {
        $chars = [];

        for ($i = 0; $i < strlen($s); $i++) {
            $char = substr($s, $i, 1);

            if (isset($chars[$char])) {
                $chars[$char]['keys'][]     = $i;
                $chars[$char]['lookup'][$i] = count($chars[$char]['keys']) - 1;
            }
            else {
                $chars[$char] = [
                        'keys'   => [$i],
                        'lookup' => [$i => 0],
                    ];
            }
        }

        $this->recurse($s, $chars);

        return $this->return;
    }

    function recurse($s, $chars, $path = [], $begI = 0) {
        $char = substr($s, $begI, 1);

        if ($begI >= strlen($s)) {
            $this->return[] = $path;
        }
        elseif (count($chars[$char]['lookup']) < 2 || $chars[$char]['lookup'][$begI] >= count($chars[$char]['keys']) - 1) {
            $path[] = $char;
            $this->recurse($s, $chars, $path, $begI + 1);
        }
        else {
            for ($keyI = $chars[$char]['lookup'][$begI] + 1; $keyI < count($chars[$char]['keys']); $keyI++) {
                $palBegI = $begI + 1;
                $palEndI = $chars[$char]['keys'][$keyI] - 1;
                $isPal   = true;

                while ($palBegI <= $palEndI) {
                    
                    $newChar = substr($s, $palBegI, 1);

                    if ($palEndI - $palBegI < 1) {
                        break;
                    }
                    elseif (! isset($chars[$newChar]['lookup'][$palEndI])) {
                        $isPal = false;
                        break;
                    }

                    $palBegI++;
                    $palEndI--;
                }

                if ($isPal) {
                    $palEndI   = $chars[$char]['keys'][$keyI];
                    array_push($path, substr($s, $begI, $palEndI - $begI + 1));
                    $this->recurse($s, $chars, $path, $palEndI + 1);
                    array_pop($path);
                }
            }

            array_push($path, $char);
            $this->recurse($s, $chars, $path, $begI + 1);
            array_pop($char);
        }
    }
}

$test = new Solution;
$input = "aaabaa";

print_r($test->partition($input));