
function filterEvenElements(arr) {
    const result = arr.filter(value => value%2===0);
    return result
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
