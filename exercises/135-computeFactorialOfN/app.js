function computeFactorialOfN(n) {
    let result = 1
    for (let i =  n ; i>1; i--)   {
        const element = i;
        
        result = result * element
    
    }
    return result
}

var output = computeFactorialOfN(3); console.log(output); // --> 6

var output = computeFactorialOfN(4); console.log(output); // --> 24