function removeStringValues(obj) {
    for (const property in obj) {
        if(typeof(obj[property])=== 'string')
        delete(obj[property])
 
     }
     return obj
}


var obj = {
    name: 'Sam',
    age: 20
  }
removeStringValues(obj);
console.log(obj); // { age: 20 }