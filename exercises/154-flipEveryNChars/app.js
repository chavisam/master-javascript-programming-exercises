function flipEveryNChars(text, n) {
    let y=0
    let arr = []
    let output = []
    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        //console.log(element)
        //ir pasando cada letra a un array
        arr.push(element)
        // sumar 1 a y
        y++
        //ver si y = n para invertir caracteres
        if(y==n){
            arr.reverse()
            let data = arr.join('')
            output.push(data)
            
            y=0
            arr = []
        }
        
        if(i==text.length-1){
            arr.reverse()
            let data = arr.join('')
            output.push(data)
            
            y=0
            arr = []
        }
    }    
    
   
    return output.join('')
}

var input = 'a short example';
var output = flipEveryNChars('watch my backflip', 3);
console.log(output); // --> ohs axe trelpma