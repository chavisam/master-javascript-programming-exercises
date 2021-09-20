
    
    
    function removeStringValuesLongerThan(num, obj) {
        for(const property in obj){
             if(obj[property].length > num)
             delete(obj[property])
        }
     }




var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };


  removeStringValuesLongerThan(6, obj);
  console.log(obj); // { age: 20, location: 'Texas' }
