function removeProperty(objet, key) {
  delete(objet[key])

}


var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined