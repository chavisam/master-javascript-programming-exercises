function computePerimeterOfATriangle(side1, side2, side3) {
  return parseInt(side1) + parseInt(side2) + parseInt(side3)
}

var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20 