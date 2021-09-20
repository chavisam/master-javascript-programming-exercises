function removeFromFront(arr) {
    arr.shift(arr[0])
    return arr
}

var output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]