function isEitherEven(num1,num2){
    if(num1%2===0 || num2%2===0) return true
    else return false
}

var output = isEitherEven(1, 3);
console.log(output); // --> true