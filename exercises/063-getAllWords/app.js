

function getAllWords(str) {
    
    arr = str.split(' ')
    return arr
}

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
