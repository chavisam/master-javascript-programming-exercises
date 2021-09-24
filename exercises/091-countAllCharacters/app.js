

function countAllCharacters(string){
  let y=0;
  const result = {};
  
    for (let i = 0; i < string.length; i++) {
        var element = string[i];

       if(result[element]==undefined){ result[element] = 1; y = y+ 1;}
        else{result[element] = parseInt(result[element]) + parseInt(1)}
       
    }

  return result
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}