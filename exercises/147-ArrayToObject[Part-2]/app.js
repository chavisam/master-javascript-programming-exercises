function fromListToObject(array) {
  let obj = {}

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const property = element[0]
    
      

     obj[property] = element[1]
  }
 return obj
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output)