// O(2N) S(2N)
var Solution = function(w) {
  this.sum = 0;
  this.ranges = [];

  this.setSum = () => {
    for (var i in w) {
      this.ranges.push([this.sum + 1, this.sum += w[i]]);
    }
  }

  this.setSum();
};

Solution.prototype.pickIndex = function() {
    const rng = Math.floor(Math.random() * this.sum) + 1;

    for (var i in this.ranges) {
      if (rng >= this.ranges[i][0] && rng <= this.ranges[i][1]) return i;
    }
};

// O(n) S(SUM)
var Solution = function(w) {
  this.ranges = [];

  this.setSum = () => {
    for (var i in w) {
      for (var n = 1; n <= w[i]; n++) {
        this.ranges.push(i);
      }
    }
  }

  this.setSum();
};

Solution.prototype.pickIndex = function() {
    return this.ranges[Math.floor(Math.random() * this.ranges.length)]
};

// O(n - 2n) S(1)
var Solution = function(w) {
  this.sum = 0;
  this.w = w;

  this.setSum = () => {
    for (var i in w) {
      this.sum += w[i];
    }
  }

  this.setSum();
};

Solution.prototype.pickIndex = function() {
  for (var i in this.w) {
    if (Math.floor(Math.random() * this.sum) + 1 <= this.w[i]) {
      return i;
    }
  }
};


// O(n + log(n)) S(N)
var Solution = function(w) {
  this.ranges = [];

  this.setSum = () => {
    var sum = 0;
    for (var i in w) {
      this.ranges.push(sum += w[i]);
    }
  }

  this.setSum();
};

Solution.prototype.pickIndex = function() {
  const rng = Math.floor(Math.random() * this.sum) + 1;

  var [beg, end, mid, output] = [0, this.ranges.length - 1, 0, this.ranges.length - 1];

  while (beg <= end) {
    mid = Math.floor((beg + end) / 2);

    if (rng < this.ranges[mid]) {
      if (mid < output) output = mid;
      
      end = mid - 1;
    } else if (rng === this.ranges[mid]) {
      return output = mid;
    } else if (rng > this.ranges[mid]) {
      beg = mid + 1;
    }
  }

  return output;
};