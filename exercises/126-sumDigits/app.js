function sumDigits(num) {
    let text = num.toString()
    let result = 0

    for (let i = 0; i < text.length; i++) {
        let element = text[i];
       

       if(element==='-'){
         element= (-text[i+1])
         
       }

       if(text[i-1]=='-'){}
       else{
        result = result + parseInt(element)
       }

       
    }
    return result
}
var output = sumDigits(-316);
console.log(output); // --> 4