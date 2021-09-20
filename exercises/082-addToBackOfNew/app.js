function addToBackOfNew(arr, element) {
    var NewArray = arr.slice()
    NewArray.push(element)
    return NewArray
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]