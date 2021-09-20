var empty = []
var NewArray = []
var y = 0

function getElementsLessThan100AtProperty(obj,key){

if(typeof(obj.key) !== 'object' || obj === []) return empty
else{
    for (let i = 0; i < obj.key.length; i++) {
        const element = obj.key[i];

        if(element < 100) {
            NewArray.push(obj.key[i])
            y++
        }
      
        
    }
    if(y===0) return empty
    else return NewArray
}
}

var obj = {
    key: [1000, 20, 50, 500]
  };
  var output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]