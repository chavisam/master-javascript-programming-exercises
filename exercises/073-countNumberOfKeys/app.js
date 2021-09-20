function countNumberOfKeys(obj) {
    
    var y = 0

    for(const property in obj){
        y++
    }


    return y
}


var obj = {
    a: 1,
    b: 2,
    c: 3
  };
  var output = countNumberOfKeys(obj);
  console.log(output); // --> 3