function getAllElementsButLast(array) {
   return array.filter((number) => number < array[array.length-1])

}

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]