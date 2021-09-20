function computeAverageLengthOfWords(word1,word2){
    var characters1 = word1.length 
    var characters2 = word2.length
    var average = (parseInt(characters1) + parseInt(characters2)) / 2
    return average
}


var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6