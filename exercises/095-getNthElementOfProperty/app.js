// Write your function here

function getNthElementOfProperty(obj,key,number){
    return obj.key[number]
}
var obj = {
    key: [1, 2, 6]
  };
  var output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2