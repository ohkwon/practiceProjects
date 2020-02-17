'use strict';

var binaryToDecimal = function (binary) {
    var result = 0;

    for (var i = 0; i < binary.length; i++) {
        var char = parseInt(binary.charAt(i));

        if (char != 0 && char != 1) {
            return false;
        }
        result += Math.pow(2, i) * char;
    }

    return result;
}

var decimalToBinary = function (decimal) {
    var result = '';

    for (var i = 7; i >= 0; i--) {
        var powerNum = Math.pow(2, i);

        if (decimal >= powerNum) {
            decimal -= powerNum;
            result   = '1' + result;
        } else {
            result   = '0' + result;
        }
    }

    return result;
}

// parameter processing

let params = [];

for (let j = 0; j < process.argv.length; j++) {
    if (j > 1) {
        params.push(process.argv[j]);
    }
}

if (typeof params[0] !== 'undefined' && typeof params[1] !== 'undefined') {
    switch (params[0].toLowerCase()) {
        case 'b2d':
            console.log(binaryToDecimal(params[1]));
            break;
        case 'd2b':
            console.log(decimalToBinary(params[1]));
            break;
    }
}