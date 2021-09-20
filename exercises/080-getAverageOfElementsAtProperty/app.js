function getAverageOfElementsAtProperty(obj,key){
    if(typeof(obj[key])===undefined) return 0
    else if(typeof(obj[key])===null) return 0
    else if(typeof(obj[key])!=='object') return 0
    else {
        var y = 0
        for (value in obj.key){
        
            y = parseInt(y) + parseInt(obj.key[value])
        }
        var result = y / (parseInt(value) + parseInt(1))
    
    }
        return result
}


var obj = {
    key: [1, 2, 3]
  };
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2