// Write your function here
let result = []

function removeElement(array,discader){

    for(let i = 0 ; i < array.length; i++){
        
        if(array[i]!==discader){
         result.push(array[i]);
     }
     
     }
 
     return result
}

var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]