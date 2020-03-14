<?php
// REDOOO
class Solution {

    /**
     * @param Integer[][] $intervals
     * @return Integer[][]
     */
    function merge($intervals) {
        $keys   = [];

        foreach ($intervals as $interval) {
            if (empty($keys)) {
                $keys = $interval;
            } else {
                $leftI  = ['num' => $interval[0]];
                $this->search($leftI, $keys, $leftI['num']);
                $rightI = ['num' => $interval[1]];
                $this->search($rightI, $keys, $rightI['num']);

                if (! isset($leftI['keyL'])) {
                    if (! isset($rightI['keyL'])) {
                        $newKeys = [$leftI['num'], $rightI['num']];

                        foreach ($keys as $key) {
                            $newKeys[] = $key;
                        }

                        $keys = $newKeys;
                        unset($newKeys);
                    } elseif (! isset($rightI['keyR'])) {
                        $keys = [$leftI['num'], $rightI['num']];
                    } else {
                        $newKeys = [$leftI['num']];

                        if ($rightI['keyL'] % 2) {
                            $newKeys[] = $rightI['num'];
                        }

                        for ($i = $rightI['keyL'] + 1; $i < count($keys); $i++) { // keyL + 1 removes need to check if is same
                            $newKeys[] = $keys[$i];
                        }

                        $keys = $newKeys;
                        unset($newKeys);
                    }
                }
                elseif (! isset($leftI['keyR'])) {
                    $keys[] = $leftI['num'];
                    $keys[] = $rightI['num'];
                }
                else {
                    if ($leftI['keyL'] == $leftI['keyR']) {
                        if ($leftI['keyR'] % 2) {
                            $leftI['keyL']--;
                        } else {
                            $leftI['keyR']++;
                        }
                    }

                    if (! isset($rightI['keyL'])) {
                        // impossible
                    } elseif (! isset($rightI['keyR'])) {
                        if ($leftI['keyL'] % 2) {
                            $key[$leftI['keyR']] = $leftI['num'];
                        } else {
                            $key[$leftI['keyR']] = $rightI['num'];
                        }

                        for ($i = $leftI['keyR'] + 1; $i < count($keys); $i++) {
                            unset($keys[$i]);
                        }
                    } else {
                        if ($rightI['keyL'] == $rightI['keyR']) {
                            if ($rightI['keyR'] % 2) {
                                $rightI['keyL']--;
                            } else {
                                $rightI['keyR']++;
                            }
                        }

                        if ($leftI['keyL'] % 2) {
                            $keys[$leftI['keyR']] = $leftI['num'];

                            if ($rightI['keyR'] % 2) {
                                $keys[$leftI['keyR'] + 1] = $keys[$rightI['keyR']];

                                for ($i = $rightI['keyR'] + 1; $i < count($keys); $i++) {
                                    $keys[] = []
                                }
                            } else {
                                $keys[];
                            }
                        } else {
                            if ($rightI['keyR'] % 2) {

                            } else {
                                
                            }
                        }
                    }
                }
            }
        }
    }

    function search(&$return, $arr, $num, $min = 0, $max = null) {
        if ($max === null) {
            $max = count($arr) - 1;
        }

        $mid = (int) (($max + $min) / 2);

        if ($arr[$mid] < $num) {
            $return['keyL'] = $mid;
            if ($mid + 1 == $max) {
                $return['keyR'] = $max;
            } else {
                $this->search($arr, $num, $mid, $max);
            }
        } elseif ($arr[$mid] == $num) {
            $return['keyL'] = $min;
            $return['keyR'] = $min;
        } elseif ($arr[$mid] > $num) {
            $return['keyR'] = $mid;
            if ($mid - 1 == $min) {
                $return['keyL'] = $min;
            } else {
                $this->search($arr, $num, $min, $mid);
            }
        }
    }
}