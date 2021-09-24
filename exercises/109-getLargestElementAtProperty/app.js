function getLargestElementAtProperty(obj, key) {
  var y=(-999999999999999999999999999999999)

  var value = obj[key];
  
  if(value===[]) return []
  if(Array.isArray(value)===false) return []
  if(value===undefined) return []

    for(let i=0 ; i<value.length ; i++){
      

      if(y<value[i]) y = value[i]
     

  }
  return y
}


var object = {
  key2: [1, 2, 4]
};

var output = getLargestElementAtProperty(object, 'key2');
console.log(output); // --> 4