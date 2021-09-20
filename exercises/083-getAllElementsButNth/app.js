function getAllElementsButNth(array, n) {
    var NewArray = array.splice(n,1)

    return array

}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']