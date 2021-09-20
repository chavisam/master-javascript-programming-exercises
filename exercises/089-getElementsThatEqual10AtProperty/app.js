var y = 0

function getElementsThatEqual10AtProperty(obj,key){
    var empty = []
    var NewArray = []
    
    
    if(typeof(obj.key) !== 'object' || obj === []) return empty
    else{
        for (let i = 0; i < obj.key.length; i++) {
            const element = obj.key[i];

            if(element === 10) {
                NewArray.push(10)
                y++
            }
          
            
        }
        if(y===0) return empty
        else return NewArray
    }





}


var obj = {
    key: [1000, 10, 50, 10]
  };
  var output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]

 