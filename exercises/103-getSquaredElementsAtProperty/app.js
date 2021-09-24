function getSquaredElementsAtProperty(obj, key) {
  var result = []

  const element = obj[key];


  if(Array.isArray(element) == false) return []
  else if(element === undefined) return []


    for (let value in element) {
    
      result.push(element[value]*element[value])
      
    }
    
    return result
}

var object = {
  key2: [2, 1, 5]
};

var output = getSquaredElementsAtProperty(object, 'key2');
console.log(output); // --> [4, 1, 25]