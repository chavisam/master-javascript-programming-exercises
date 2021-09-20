function getIndexOf(letter,text){

    var y = 0
    var t = 0


    for (let i = 0; i < text.length; i++) 
    {
        const element = text[i];

            if(element === letter){
                y++
                if(y===1){t=i}
            }
        
    }
    
    if(y===0) return -1
    else return t

}
var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2