var object = {
  key2: [1, 2, 3, 4, 5]
};
var result = []

function getOddElementsAtProperty(obj, key) {
    
  for (const value in obj.key) {
    if (Object.hasOwnProperty.call(obj.key, value)) {
      const element = obj.key[value];
      
      if(element===null) return []
      if(element===undefined) return []
      if(!Array.isArray(obj.key)) return []
      

      if(element %2!==0) result.push(element)
    }
  }
  if(result===[]) return []
  return result
}

var output = getOddElementsAtProperty(object, 'key2');
console.log(output); // --> [1, 3, 5]