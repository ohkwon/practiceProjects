var numSquares = function(n) {
  this.count = 0;
  this.least = null;

  const subtract = (n) => {
    this.count++;
    var [difference, output] = [null, null];

    for (var minuend = Math.floor(Math.sqrt(n)); minuend > 0; minuend--) {
      if (minuend === 1) {
        this.count += (n - 1);
        if (this.least === null || this.count < this.least) this.least = this.count;
        this.count -= (n - 1);
        break;
      } else {
        difference = n - (minuend * minuend);
        if (difference === 0) {
          if (this.least === null || this.count < this.least) this.least = this.count;
          break;
        }
  
        if (this.least === null || this.count < this.least) subtract(difference);
      }
    }

    this.count--;
    return this.least;
  }

  return subtract(n);
};

console.log(numSquares(12));