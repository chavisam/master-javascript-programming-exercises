function convertDoubleSpaceToSingle(str) {
    var result = str.replace(/\s+/g, ' ')
    return result
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"