function isSameLength(word1,word2){
    var characters1 = word1.length
    var characters2 = word2.length

    if(characters1 === characters2) return true
    else return false
}

var output = isSameLength('words', 'super');
console.log(output); // --> true