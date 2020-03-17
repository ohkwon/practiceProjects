// s is string with only non-neg int, +, -, *, / and empty spaces

var calculate = function(s) {
    return subCalculate(s);
}

var subCalculate = function(s, negative = false) {
    var num              = ''; // current number we are constructing
    var subNum           = null;
    var subtract         = false; // to denote if the operation following the above number is subtraction or not
    var isMultiplyDivide = true; // to denote if the operation is multiplication/division
    var i                = 0;

    while (i < s.length) {
        var char = s.charAt(i);

        if (isNaN(char)) {
            if (char === '+' || char === '-') {
                if (char === '-') {
                    subtract = true;
                }

                i++;
                break;
            } else if (char === '*' || char === '/') {
                subNum           = multiplyDivide(subNum, num, isMultiplyDivide);
                isMultiplyDivide = char;
                num              = '';
            }
        } else {
            num += char;
        }

        i++;
    }

    num = multiplyDivide(subNum, num, isMultiplyDivide);

    if (num || typeof num === 'number') {
        return (negative ? -1 : 1) * num + subCalculate(s.substr(i), subtract);
    }

    return 0;
}

var multiplyDivide = function(num1, num2, operation) {
    if (num2) {
        num2 = parseInt(num2);

        if (typeof operation === 'string') {
            if (operation === '*') {
                result = num1 * num2;
            } else {
                result = Math.floor(num1 / num2);
            }
        } else {
            result = num2;
        }
    } else {
        result = num1;
    }

    return result;
}

console.log(calculate('2*3+4'));