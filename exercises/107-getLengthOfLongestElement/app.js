

function getLengthOfLongestElement(arr) {
    let y = ''
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if(arr=== []) return 0
       if(element.length > y.length) y = element
        
    }

     return y.length
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5