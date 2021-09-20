function countCharacter(str, char) {
    let y = 0;

    for (i = 0 ; i < str.length ; i++){
        if(str[i]===char) y++
    }

    return y
   
    
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3