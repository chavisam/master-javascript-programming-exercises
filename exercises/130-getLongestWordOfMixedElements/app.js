function getLongestWordOfMixedElements(arr) {
    let wordLength =0
    let maxLength=0
    let NOstring=true
    let result

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(typeof(element)== 'string'){
            NOstring=false
            wordLength = element.length
            if(wordLength>maxLength){result = element;maxLength=wordLength}
        }

    }
    if(arr.length===0 || NOstring==true){return ''}
    return result
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'