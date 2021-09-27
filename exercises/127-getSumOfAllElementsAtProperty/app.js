var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(object, key2) {
    let value = object[key2]
    let result =0

    if(value===undefined){return 0}
    
    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        result = result + element
    }
    if(value.length==0){return 0}
    return result
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); 