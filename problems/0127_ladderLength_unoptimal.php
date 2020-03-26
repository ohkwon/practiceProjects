<?php
class Solution {
    public $shortestPath = 0;
    /**
     * @param String $beginWord
     * @param String $endWord
     * @param String[] $wordList
     * @return Integer
     */
    function ladderLength($beginWord, $endWord, $wordList) {
        $this->traverse($beginWord, $endWord, $wordList, [-1 => -1]);

        return $this->shortestPath;
    }

    function traverse($currentWord, $endWord, $wordList, $path = []) {
        foreach ($wordList as $i => $word) { // traverse each word again
            $diffCount = 0;

            for ($charI = 0; $charI < strlen($currentWord); $charI++) { // compare each word, char by char
                if (substr($currentWord, $charI, 1) != substr($word, $charI, 1)) {
                    $diffCount++;

                    if ($diffCount > 1) { // exit if there is more than 1 diff character, no need to compare any longer
                        break;
                    }
                }
            }

            if ($diffCount == 1) { // if we have a word that is one difference away
                $path[$i] = $i;    // then we add it to the path, indexed by the index the word is in the $wordList

                if ($word == $endWord) { // if we have the end word, then the path is set.
                    $pathCount = count($path);

                    if ($this->shortestPath == 0 || $pathCount < $this->shortestPath) {
                        $this->shortestPath = $pathCount;
                    }

                    return;
                } elseif ($this->shortestPath == 0 || count($path) < $this->shortestPath) { // continue with the next word on this path only if it has not exceeded the current shortestPath
                    unset($wordList[$i]);
                    $this->traverse($word, $endWord, $wordList, $path);
                    $wordList[$i] = $word;
                }

                unset($path[$i]);
            }
        }
    }
}