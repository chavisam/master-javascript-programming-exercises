function findMaxLengthOfThreeWords(word1,word2,word3){

var word1Length = word1.length 
var word2Length = word2.length 
var word3Length = word3.length 

var arr = [word1Length,word2Length,word3Length]
arr.sort(function(a, b){return b - a}); // --> 3, 12, 23
return arr[0]
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3