var arr = [];

function getAllLetters(str) {
   
    for (let key in str) {
        
            const element = str[key];
            
            arr.push(element)
        
    }
    return arr
}

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']