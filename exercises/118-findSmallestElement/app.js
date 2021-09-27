function findSmallestElement(arr) {
    
    let y=99999999999999999999999999999999999999999999
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if(element<y){
            y = element
        }
        
    }
    if(arr.length==0) return 0
    return y
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1