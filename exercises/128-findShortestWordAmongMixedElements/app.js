function findShortestWordAmongMixedElements(arr) {
    var t = 999999999999999999999999999999999999999999999999
    var data = []
    var result = []
    let Notext= false
      for (let i = 0; i < arr.length; i++) 
      {
        let word = arr[i]
        if(typeof(word)== 'string'){Notext = true}
         
        
          
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
          if(Notext===false) {return ''}
          else return result[0]
          
   
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'