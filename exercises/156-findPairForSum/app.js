function findPairForSum(array, number){
    let arr = []
 for (let i = 0; i < array.length; i++) 
 {
     
     const num1 = array[i];
     
     for (let y = 1; y < array.length-1; y++) {
         const num2 = array[y];

         if(num1+num2==number)
         {
             arr.push(num1);
             arr.push(num2);
             return arr
         }else{}
         
     }
 }
 
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]