var calculate = function(s) {
    var sum             = 0;
    var productQuotient = null;
    var num             = '';
    var prevOperand     = '+';

    for (var i = 0; i < s.length; i++) {
        var char = s.charAt(i);

        if (isNaN(char)) {
            if (char === ' ') {
                continue;
            }

            num = parseInt(num);
            // console.log('sum');console.log(sum);console.log('prevOperand');console.log(prevOperand);console.log('productQuotient');console.log(productQuotient);console.log('num');console.log(num);console.log('char');console.log(char);

            if (char === '+' || char === '-') {
                if (prevOperand === '+' || prevOperand === '-') {
                    sum += (prevOperand === '-' ? -1 : 1) * num;
                }
                else if (prevOperand === '*' || prevOperand === '/') {
                    if (prevOperand === '*') {
                        productQuotient *= num;
                    } else {
                        var sign = productQuotient >= 0 ? 1 : -1;
                        productQuotient = sign * Math.floor(Math.abs(productQuotient) / num);
                    }

                    sum += productQuotient;
                }

                productQuotient = null;
            } else if (char === '*' || char === '/') {
                if (prevOperand === '+' || prevOperand === '-') {
                    productQuotient = num;

                    if (prevOperand === '-') {
                        productQuotient *= -1;
                    }
                }
                else if (prevOperand === '*') {
                    productQuotient *= num;
                }
                else if (prevOperand === '/') {
                    var sign = productQuotient >= 0 ? 1 : -1;
                    productQuotient = sign * Math.floor(Math.abs(productQuotient) / num);
                }
            }

            prevOperand = char;
            num         = '';
        } else {
            num += char;
        }
    }

    if (typeof num === 'string') {
        num = parseInt(num);
    }
    // console.log('sum');console.log(sum);console.log('prevOperand');console.log(prevOperand);console.log('productQuotient');console.log(productQuotient);console.log('num');console.log(num);console.log('char');console.log(char);
    if (prevOperand === '+' || prevOperand === '-') {
        sum += (prevOperand === '-' ? -1 : 1) * num;
    }
    else if (prevOperand === '*' || prevOperand === '/') {
        if (prevOperand === '*') {
            productQuotient *= num;
        } else {
            var sign = productQuotient >= 0 ? 1 : -1;
            productQuotient = sign * Math.floor(Math.abs(productQuotient) / num);
        }

        sum += productQuotient;
    }

    return sum;
}

console.log(calculate('1*2-3/4+5*6-7*8+9/10'));