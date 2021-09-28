function isOddWithoutModulo(num) {
    let result = (num/2).toString()
    
    
    if(result.includes('.')) {return true}
    else{ return false}
}
var output = isOddWithoutModulo(17);
console.log(output); // --> true