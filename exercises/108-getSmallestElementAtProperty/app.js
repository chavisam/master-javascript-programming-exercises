function getSmallestElementAtProperty(obj, key) {
    
  var y=0
  var element = obj[key];
  var result = []

  
  if(Array.isArray(element)===false) return result
  if(element===undefined) return result

  for (let value in element) {
   
    if(y===0) y = element[value]
    else if(element[value]<y) y = element[value]
    
  }
  if(element.length===0) return []
  else return y
}

var object = {
  key2: [2, 1, 5]
};

var output = getSmallestElementAtProperty(object, 'key2');
console.log(output); // --> 1