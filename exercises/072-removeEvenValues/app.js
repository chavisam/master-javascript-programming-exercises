function removeEvenValues(obj) {
   
    for(const property in obj){
        if(obj[property] %2===0)
        delete(obj[property])
    }
    
}


var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeEvenValues(obj);
  console.log(obj); // --> { b: 3 }