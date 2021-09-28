function isEvenWithoutModulo(num) {
    let result = (num/2).toString()
    
    
    if(!result.includes('.')) {return true}
    else{ return false}
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true