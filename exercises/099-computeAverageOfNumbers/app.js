var suma=0
var divisor = 0

function computeAverageOfNumbers(arr){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
    
        suma = parseInt(suma) + parseInt(element)
        divisor = divisor +1
        
    }

    return suma/divisor

}


var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3