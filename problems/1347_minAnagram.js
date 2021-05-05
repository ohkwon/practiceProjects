var minSteps = function(s, t) {
  const letterStack = {};
  var output = 0;

  for (var i in s) {
    if (! letterStack[s[i]]) letterStack[s[i]] = 0;

    letterStack[s[i]]++;
  }

  for (var i in t) {
    if (letterStack[t[i]]) {
      letterStack[t[i]]--;
      
      if (letterStack[t[i]] < 1) delete letterStack[t[i]];
    } else {
      output++;
    }
  }

  return output;
}

console.log(minSteps('bab', 'aba'));