function repeatString(string, num) {
    let result = ''
    for (let i = num; i > 0; i--) {
        
        result = result + string
        
    }
    return result
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'