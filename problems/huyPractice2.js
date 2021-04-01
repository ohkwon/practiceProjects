function stepPermutations(n, stepLengths) {
  if (n < 2) {
    return 1;
  }

  const permutations = [1];
  var total = 0;

  for (var pos = 1; pos <= n; pos++) {
    total = 0;

    for (var option = 0; option < stepLengths.length; option++) {
      if (pos - stepLengths[option] >= 0) total += permutations[pos - stepLengths[option]];
    }

    permutations[pos] = total;
  }

  return permutations[n];
}

function test(n, stepLengths) {
  let permutations = 0;
  
  const takeStep = (pos) => {
    if (pos === n) return permutations++;

    for (var option = 0; option < stepLengths.length; option++) {
      if (stepLengths[option] + pos > n) break;

      takeStep(pos + stepLengths[option]);
    }
  }

  takeStep(0);
  return permutations;
}

for (var i = 1; i <= 10; i++) {
  console.log('running on: ' + i);
  console.log(stepPermutations(i, [1,3,5]));
}