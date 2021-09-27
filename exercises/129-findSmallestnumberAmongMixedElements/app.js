function findSmallestNumberAmongMixedElements(arr) {
  let smallest = 99999999999999999999999
  let Nan=true
  

  for (let i = 0; i < arr.length; i++)
  {
      const element = arr[i];
      if(typeof(element)=== 'number'){ Nan=false}
      if(smallest>element) smallest = element
 
  }
    
    if(Nan===true || arr.length===0) {return 0}
    else return smallest
}

var output = findSmallestNumberAmongMixedElements([ 4,'lincoln',9, 'octopus']);
console.log(output); // --> 4