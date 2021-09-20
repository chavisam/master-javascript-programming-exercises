function or(expression1, expression2) {
  if(expression1==true && expression2!=true) return true
  else return false
}

var output = or(true, false);
console.log(output); // --> true;