

function filterOddLengthWords(words) {

    var result = []
    for (const value in words) {
  
        const element = words[value]

        if(element.length %2!==0) result.push(element)
      
  
     }
    
     return result
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now','even']);
console.log(output); // --> ['there', "now']