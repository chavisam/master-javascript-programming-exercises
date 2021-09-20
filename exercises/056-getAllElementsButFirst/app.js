function getAllElementsButFirst(array) {
  return array.filter((number) => number > array[0])
}

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]