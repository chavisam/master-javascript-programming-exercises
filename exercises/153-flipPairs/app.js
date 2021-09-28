function flipPairs(input){
    let output= ''
    for (let i = 0; i < input.length; i++) {
       
        const word = input[i]
        const word2 = input[i+1]

        if(i %2===0){
                if(word2==undefined){
                    output=output + word
                }else{
                    output=output + word2 + word
                }
                
            }
            

    }
    return output
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
