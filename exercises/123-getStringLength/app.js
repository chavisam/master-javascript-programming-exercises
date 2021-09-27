function getStringLength(string) {



    var t=0
    var data

    do
    {
        data =string.slice(0,t+1)
        t=t + 1
       
    }
    while (data != string)

    return t
}

var output = getStringLength('hello');
console.log(output); // --> 5