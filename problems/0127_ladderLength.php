<?php
class Solution {

    /**
     * @param String $beginWord
     * @param String $endWord
     * @param String[] $wordList
     * @return Integer
     */
    function ladderLength($beginWord, $endWord, $wordList) {
        $begQ      = [-1 => $beginWord];
        $endQ      = [-2 => $endWord];
        $begList   = $wordList;
        $endList   = $wordList;
        $begI      = 0;
        $endI      = 0;
        $iMax      = self::wordCompare($beginWord, $endWord, true);
        $return    = 0;

        while (! empty($begQ) || ! empty($endQ)) {
            if (! empty($begQ)) {
                self::iterateQueue($begList, $begQ);
                $begI++;
                $return = self::queueCompare($begQ, $begI, $endQ, $endI, $iMax, $endWord);
                // print_r(['begQ ' . $begI => $begQ]);
                if ($return > 0) {
                    $return++;
                    break;
                }
            }

            if (! empty($endQ)) {
                if (! self::iterateQueue($endList, $endQ, true)) {
                    return 0;
                }

                $endI++;
                $return = self::queueCompare($begQ, $begI, $endQ, $endI, $iMax, $endWord);
                // print_r(['endQ ' . $endI => $endQ]);
                if ($return > 0) {
                    $return++;
                    break;
                } elseif ($return < 0) {
                    return 0;
                }
            }
        }

        return $return;
    }

    static function iterateQueue(&$wordList, &$queue, $checkEnd = false) {
        $newQueue = [];
        $endFound = false;

        if (! $checkEnd || ! isset($queue[-2])) {
            $checkEnd = false;
        }

        foreach ($queue as $queueI => $queueWord) {
            foreach ($wordList as $wordListI => $wordListWord) {
                if ($checkEnd && ! $endFound && $queueI == -2 && $queueWord == $wordListWord) {
                    $endFound = true;
                }

                if (self::wordCompare($queueWord, $wordListWord)) {
                    $newQueue[$wordListI] = $wordListWord;
                    unset($wordList[$wordListI]);
                }
            }
        }

        if ($checkEnd && ! $endFound) {
            return false;
        }

        $queue = $newQueue;

        return true;
    }

    static function wordCompare($wordA, $wordB, $returnDiffCount = false) {
        $diffCount = 0;

        for ($charI = 0; $charI < strlen($wordA); $charI++) {
            if (substr($wordA, $charI, 1) != substr($wordB, $charI, 1)) {
                $diffCount++;

                if (! $returnDiffCount && $diffCount > 1) {
                    return false;
                }
            }
        }

        if ($returnDiffCount) {
            return $diffCount;
        } elseif ($diffCount == 1) {
            return true;
        } else {
            return false;
        }
    }

    static function queueCompare($begQ, $begI, $endQ, $endI, $iMax, $endWord) {
        if ($begI + $endI >= $iMax) {
            foreach ($begQ as $begQI => $begQWord) {
                if ($begQWord == $endWord) {
                    return $begI;
                }
                elseif (isset($endQ[$begQI])) {
                    return $begI + $endI;
                }
            }
        }

        return 0;
    }
}

$test = new Solution;

$beg = "hit";
$end = "cog";
$list = ["hot","dot","dog","lot","log"];
// $list = ["hot","dot","dog","lot","log","cog"];

echo 'ANSWER IS: ' . $test->ladderLength($beg, $end, $list);