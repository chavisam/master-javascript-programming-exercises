// Write your function here
let result=[]

function getElementsGreaterThan10AtProperty(obj,key){

    for(let value in obj.key){
       let data = obj.key[value]
       if(data>10){
        result.push(data);
    }else { result = []}
    
    }

    return result
}


var obj = {
    key: [1, 20, 30]
  };
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]