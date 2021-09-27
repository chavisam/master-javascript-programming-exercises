function findShortestElement(arr) {
    var t = 999999999999999999999999999999999999999999999999999
    var data = []
    var result = []
      for (let i = 0; i < arr.length; i++) 
      {
          
          let wordlength = arr[i].length
              data.push(wordlength)
          
            
      }
  
          for (let y = 0; y < data.length; y++) {
              var element = data[y];
              
  
              
  
              if(element<t){
                  result.pop()
                  result.push(arr[y]);
                  t = element
              }
          }
  
          if(arr.length===0) return ''
          else return result[0]

}

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'