var obj = {
  key: ['a', 'long', 'game']
};

var result = []

function getEvenLengthWordsAtProperty(obj, key) {
    
    for (const value in obj.key) {
  
       const element = obj.key[value]
       if(element.length %2===0) result.push(element)
       if(obj.key=== undefined) return []
       if(typeof(obj.key)!== 'array') return []
       
      
      
    }
    if(result[0]===null) return []
    return result
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']