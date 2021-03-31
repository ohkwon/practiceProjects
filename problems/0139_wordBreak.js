// var wordBreak = function(s, wordDict) {
//   this.words = {};

//   for (var i in wordDict) {
//     if (! this.words[wordDict[i].length]) this.words[wordDict[i].length] = [];
//     this.words[wordDict[i].length].push(wordDict[i]);
//   }

//   this.wordKeys = Object.keys(this.words);

//   const subtractWord = (s) => {
//     console.log(s);
//     var wordLen;
//     if (s.length == 0) {
//       return true;
//     } else if (s.len < this.wordKeys[0]) {
//       return false;
//     }

//     for (var lenI = this.wordKeys.length - 1; lenI >=0; lenI--) {
//       wordLen = this.wordKeys[lenI];
//       if (wordLen > s.length) continue;

//       for (var wordI in this.words[wordLen]) {
//         if (s.indexOf(this.words[wordLen][wordI]) === 0 && subtractWord(s.substr(wordLen))) return true;
//       }
//     }

//     return false;
//   }

//   return subtractWord(s);
// };

var wordBreak = function(s, wordDict) {
  var invalid = [];

  const search = (left = 0) => {
    if (left === s.length) return true;

    for (var right = left + 1; right <= s.length; right++) {
      if (! invalid[right] && wordDict.includes(s.substring(left, right)) && search(right)) return true;
    }
    
    invalid[left] = true;
    return false;
  }

  return search();
};


console.log(wordBreak("leetcode", ["leet","code"]));
// console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]));
