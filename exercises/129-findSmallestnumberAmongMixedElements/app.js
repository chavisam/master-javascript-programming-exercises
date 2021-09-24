
let smallest = 99999999999999999999999

function findSmallestNumberAmongMixedElements(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
  
    
    if(typeof(element=== 'number')) 
    {
     
      if(smallest>element) smallest = element
    }
    
    

    
  }
    if(smallest ===99999999999999999999999) return 0
    
    else return smallest
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4