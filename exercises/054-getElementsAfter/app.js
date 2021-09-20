// function getElementsAfter(array, n) {
//   const result = array.filter(letter => letter > array[n]);
//   return result
// }

// var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
// console.log(output); // --> ['d', 'e']


function getElementsAfter(array, n) {
  const result = array.slice(n+1);
  return result
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']