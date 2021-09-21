var result = []

function keep(arr,number){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if(element===number) result.push(element)
    }
    return result
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // [2, 2]