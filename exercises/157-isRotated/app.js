function isRotated(str1, str2) {
   

   for (let i = 0; i < str1.length; i++) {
       
       let end = str1.slice(0,i)
       let  word = str1.slice(i,9999)
       
       let output = word + end

   //comparamos si es igual a str2
     if(output == str2)
     {return true}
     
   }  
   return false
}

console.log(isRotated('hello world', 'orldhello w')) // => true
//console.log(isRotated('hello world', 'omrel wp')) // => false