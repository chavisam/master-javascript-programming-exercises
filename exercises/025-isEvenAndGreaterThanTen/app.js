function isEvenAndGreaterThanTen(number){
    if(number %2===0 && number >10) return true 
    else return false
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> falso