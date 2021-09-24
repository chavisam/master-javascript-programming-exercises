function filterEvenLengthWords(words) {
   var result =[]
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        
        if(element.length %2===0) result.push(element)
    }
    
     return result
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']