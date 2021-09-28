function listAllValues(object) {

  let arr = Object.values(object)
 
  return arr
}


var obj = {
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}

var output = listAllValues(obj);

console.log(output)