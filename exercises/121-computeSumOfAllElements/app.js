function computeSumOfAllElements(arr) {
  let sum = 0
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    sum = parseInt(sum) + parseInt(element)
  }
  return sum
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6