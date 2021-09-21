


function getLastElementOfProperty(obj,key){
    let lastNumber = obj.key.length-1

return obj.key[lastNumber]
}

var obj = {
    key: [1, 2, 5]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5