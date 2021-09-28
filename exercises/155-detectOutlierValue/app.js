function detectOutlierValue(string) {
    let arr = string.split(' ')
    let output = []
    let type = 0
    

    for (let i = 0; i < arr.length; i++)
    {
        const element = arr[i];
      
        if(element %2===0){
            output.push(1);
            type = type +1
        }else{output.push(0)}
    
    }

    // now we have to see
    if(type==arr.length-1){
        return output.indexOf(0)+1
    }else return output.indexOf(1)+1
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2