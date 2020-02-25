// s is string with only non-neg int, +, -, *, / and empty spaces

var calculate = function(s) {
    return subCalculate(s, '+');
}

var subCalculate = function(s, operation) {
    if (! s || s.length < 1) {
        return 0;
    }

    number = '';

    for (var i = 0; i < s.length; i++) {
        char = s.charAt(i);

        if (Number.isInteger(parseInt(char))) {

        }
    }

    return number + subCalculate(s, positive);
}