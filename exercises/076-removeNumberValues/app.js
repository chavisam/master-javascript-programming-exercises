var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    for (const property in obj) {
        if(typeof(obj[property])=== 'number')
        delete(obj[property])
 
     }
     return obj
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }