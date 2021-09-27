function joinArrayOfArrays(arr) {
    let result=[]
        arr.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                const value = element[i];
                result.push(value)
            }
        });
    return result
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']