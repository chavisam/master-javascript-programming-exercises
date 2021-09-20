function computePerimeterOfARectangle(length, width) {
  var high = 2*length
  var long = 2*width
  var total = parseInt(high) + parseInt (long)
  return total
}
var output = computePerimeterOfARectangle(5, 2);
console.log(output);