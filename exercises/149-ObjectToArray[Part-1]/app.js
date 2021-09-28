function getAllKeys(object) {
  let result = []
  let arr = Object.entries(object)
  for (const iterator of arr) {
    result.push(iterator[0])
  }
  return result
}


var obj = {
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}

var output = getAllKeys(obj);

console.log(output)