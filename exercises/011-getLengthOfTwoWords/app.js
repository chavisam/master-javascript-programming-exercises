function getLengthOfTwoWords(word1, word2) {
  var characters = word1.length
  var characters2 = word2.length
  var Sum = parseInt(characters) + parseInt(characters2)
  return Sum
}

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9