function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  let result= principal * Math.pow((1+(interestRate/compoundingFrequency)),(compoundingFrequency*timeInYears))-principal
  return result
}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543