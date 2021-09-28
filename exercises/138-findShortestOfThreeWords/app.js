function findShortestOfThreeWords(word1, word2, word3) {
    let shortest = ''
    let word1Length = word1.length
    let word2Length = word2.length
    let word3Length = word3.length
  
    if(word1Length<=word2Length){shortest = word1}
    else if(word3Length<word1Length){ shortest = word3}
    else {shortest = word2}
        
    return shortest


}
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'