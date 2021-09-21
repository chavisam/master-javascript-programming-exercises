var obj = {
  key: [2, 1, 5]
};

var result = []
function getSquaredElementsAtProperty(obj, key) {
    for (const value in obj.key) {
      if (Object.hasOwnProperty.call(obj.key, value)) 
      {
        
        const element = obj.key[value];
        
   
      
       if(!Array.isArray(obj.key)) return []
       else if(obj.key === undefined) return []
      else result.push(element*element)

      }
    }
    
    return result
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]