function getLengthOfThreeWords(word1, word2, word3) {
  return parseInt(word1.length) + parseInt(word2.length) + parseInt(word3.length)
}

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14