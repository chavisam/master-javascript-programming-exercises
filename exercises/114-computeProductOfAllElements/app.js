function computeProductOfAllElements(arr) {

    var result  = 1
    

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        result = result * element
    }
    if (arr.length===0) return 0
    else return result
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60