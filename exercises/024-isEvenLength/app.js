function isEvenLength(word){
    var contador = word.length 

    if(contador %2===0) return true
    else return false
}

var output = isEvenLength('wow');
console.log(output); // --> falso