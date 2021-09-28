function modulo(num1, num2) {
    let division = num1/num2
    let resto = division.toString()
    let y=0
  for(let i=0; i<resto.length ; i++){
        if(resto[i]==='.'){y=i}     
    
  }

    let result= resto.substring(y,999999999)
    
    if(num1<0){return - (result*num2)}
    else return result*num2

}

var output = modulo(25, 4);
console.log(output); // --> 1