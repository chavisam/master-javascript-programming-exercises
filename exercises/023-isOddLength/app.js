function isOddLength(word){
    var characters = word.length 

    if(characters %2!==0) return true
    else return false
}

var output = isOddLength('special');
console.log(output); // --> true

