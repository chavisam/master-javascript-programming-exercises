var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    let element =  obj.key
    
    for (let i = 0; i < obj.key.length; i++) {
      const element = obj.key[i];
      
    }
    if(element ===[]) return []
    else if (Array.isArray(element)===false) return[]
    else if(element===undefined) return []
    else  {element.pop()
    return element}

}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]