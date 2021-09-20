function addProperty(obj, key) {
  
  var value = obj[key]=true
  return obj
}

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true