function removeArrayValues(obj) {
    
    for (const property in obj) {
       if(typeof(obj[property])=== 'object')
       delete(obj[property])

    }
    return obj
}


var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }