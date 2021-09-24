var result = []
var shortest= 99999999999999999999999999999999999999999999999999999999999999999
function findShortestElement(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        var element = arr[i].length
      
        if(element<shortest) shortest = element; result.push(arr[i])

        
 
}
    
    return result
//  result.sort(function(a, b){return a - b}); 
//         return result[0]

}

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'