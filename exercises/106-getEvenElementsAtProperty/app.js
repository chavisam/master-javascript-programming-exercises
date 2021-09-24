
var objeto = {
  data: [100, 11, 50, 17]
};




function getEvenElementsAtProperty(obj, key) {
  var result = []

  const value = obj[key];

  if(value==null) return result
  if(value==undefined) return result
  if(Array.isArray(value) ==false) return result
 

  for (let element in obj.key) {

      if(obj[key][element] %2===0) result.push(obj[key][element])
      
  }

  return result
}
var output = getEvenElementsAtProperty(objeto, 'data');
console.log(output); // --> [1000, 50]