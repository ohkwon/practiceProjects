/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var x       = matrix[0].length - 1;
    var y       = 0;
    var current = null;

    while (x >= 0 && y < matrix.length) {
        current = matrix[y][x];

        if (current > target) {
            x--;
        }
        else if (current < target) {
            y++;
        }
        else { // we found it!
            return true;
        }
    }

    return false;
};