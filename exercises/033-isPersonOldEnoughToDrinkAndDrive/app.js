function isPersonOldEnoughToDrinkAndDrive(person) {
 
  if(person.age>=21 ) return true
  else return false
 
}


var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false