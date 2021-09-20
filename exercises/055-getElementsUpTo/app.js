function getElementsUpTo(arr,n){
  const result = arr.slice(0 , n)
  return result
}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']