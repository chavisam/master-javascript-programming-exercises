function select(arr,obj){

    var NewObj={}

    for (const key in obj) {
        
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];

            if(key === element) NewObj[element] = obj[element]
            
        }
    }

    return NewObj
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }