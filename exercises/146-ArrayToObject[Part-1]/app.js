let Js = {}

function transformFirstAndLast(array) {
  
  
    
    Js[array[0]] = array[array.length-1]
  

  return Js
}


let output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
console.log(output)