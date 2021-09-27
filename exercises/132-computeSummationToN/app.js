function computeSummationToN(n) {
    let result =0
    for (let i = n; i > 0; i--) {
        const element = i;
        result = result + element
    }
    return result
    
}

var output = computeSummationToN(6);
console.log(output); // --> 21