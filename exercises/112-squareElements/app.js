function squareElements(arr) {
 let result=[]
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    result.push(element*element)
  }
  return result
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]