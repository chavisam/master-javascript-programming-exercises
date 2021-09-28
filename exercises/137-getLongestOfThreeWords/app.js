function getLongestOfThreeWords(word1, word2, word3) {
    let longest = ''
    let word1Length = word1.length
    let word2Length = word2.length
    let word3Length = word3.length
  
    if(word1Length>=word2Length){longest = word1}
    else if(word3Length>word1Length){ longest = word3}
    else {longest = word2}
        
    return longest


 

}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'