function getLargestElement(arr) {

  let y = 0
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      
      if(element>y){
        y=element
      }
    }
    if(arr.length==0) return 0
    else return y
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;