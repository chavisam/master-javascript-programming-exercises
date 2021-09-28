function convertObjectToList(object) {

  let array_child = []
  let arr = Object.entries(object)

  for (const property of arr) {
  
    
    array_child.push(property)
  
  }
  return array_child
}


var obj = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}

var output = convertObjectToList(obj);

console.log(output)