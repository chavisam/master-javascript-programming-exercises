

function computeAverageOfNumbers(arr){

    var suma=0
    var divisor = 0


    for (let num in arr) {
        var dato =arr[num]  
        
        suma =  parseInt(suma) + parseInt(dato)
        divisor = parseInt(divisor) + parseInt(1)
    }

    return suma/divisor

}


var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3