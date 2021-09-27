var array = [];

function getAllLetters(str) {
   
    for (let i = 0; i < str.length; i++) {
        const element = str[i];          
            array.push(element)
        
    }
    return array
}

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']