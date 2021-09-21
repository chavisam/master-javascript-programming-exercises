var result=[]

function getOddLengthWordsAtProperty(obj,key){

    for (let i = 0; i < obj.key.length; i++) {
        const element = obj.key[i];
        console.log(element)
            if( i %2!==0) result.push(obj.key[i])
    }

    return result
}


var obj = {
    key: ['It', 'has', 'some', 'words']
  };
  var output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']