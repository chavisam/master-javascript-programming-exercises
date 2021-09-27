function getLargestNumberAmongMixedElements(arr) {
    let largestNumber = 0
    let Nan=true
    
  
    for (let i = 0; i < arr.length; i++)
    {
        const element = arr[i];
        if(typeof(element)=== 'number'){ Nan=false}
        if(largestNumber < element) largestNumber = element
   
    }
      
      if(Nan===true || arr.length===0) {return 0}
      else return largestNumber
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5