const obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
   

        
        for(property in obj2){


            if(obj1.hasOwnProperty(property)){}           
            
               else obj1[property]=obj2[property]
            
        }
    
     return obj1
}


extend(obj1, obj2);
console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}