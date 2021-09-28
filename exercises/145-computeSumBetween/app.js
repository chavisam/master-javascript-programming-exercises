function computeSumBetween(num1, num2) {
    let result = 0
    
    if(num2 <= num1){return 0}
    else{

        
            for (let i = num1; i < num2; i++) {
                
                result = result + i
               
            }
    }

    return result
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9