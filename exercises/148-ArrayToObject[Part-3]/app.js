function transformEmployeeData(array) {
  
  let output = []
 //accedo al array_child
 for (const array_child of array) {
  let obj={}
   //accedemos al elemento de cada array child
   for (const element of array_child) {
    
     //cambiamos de array a obj
     obj[element[0]] = element[1]
   }
   // almacenamos el objeto en el output
   output.push(obj)
 }
 return output
}






var arr = [
  [
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
      ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]

var output = transformEmployeeData(arr);
console.log(output);


