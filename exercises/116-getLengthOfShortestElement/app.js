function getLengthOfShortestElement(arr) {
   
 let y = 9999999999999999999999999999999
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].length;

        if(element<y) y = element
    }
    if(arr.length===0) return 0
    else return y
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3