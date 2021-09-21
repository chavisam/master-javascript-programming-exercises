var result = []

function filterOddLengthWords(words) {
    for (const value in words) {
  
        const element = words[value]

        if(element.length %2!==0) result.push(element)
      
  
     }
    
     return result
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now','odd','even']);
console.log(output); // --> ['there', "now']