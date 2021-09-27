function filterOddElements(arr) {
  const result = arr.filter(value => value%2!==0);
  
 return result
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]