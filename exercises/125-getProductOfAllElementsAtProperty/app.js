function getProductOfAllElementsAtProperty(object, key2) {

  let y= 1
  let value = object[key2]
  
  if(Array.isArray(value)===false) return 0
  if(value===undefined) return 0

    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      
      y = y*element
     
    }
 
   if(value.length===0) {return 0}
   else return y
}



var obj = {
  key: [1, 2, 3, 4]
};


var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24