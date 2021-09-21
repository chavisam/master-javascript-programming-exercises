// Write your function here

function getFirstElementOfProperty(obj,key){

    for(let value in obj.key){
        if(obj.key[0]===undefined) return undefined
        if(typeof(obj.key)!== 'object') return undefined
        else return obj.key[0]
    }
}


var obj = {
    key: [1, 2, 4]
  };
  var output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1