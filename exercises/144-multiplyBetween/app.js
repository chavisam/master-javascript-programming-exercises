function multiplyBetween(num1, num2) {
    let result = 1
    
    if(num2 <= num1){return 0}
    else{

        
            for (let i = num1; i < num2; i++) {
                
                result = result * i
               
            }
    }

    return result
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24