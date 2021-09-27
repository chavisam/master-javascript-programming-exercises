function calculateBillTotal(preTaxAndTipAmount) {
   var tip = preTaxAndTipAmount*0.15
   var taxes = preTaxAndTipAmount * 1.095
    return tip + taxes
}


var output = calculateBillTotal(20);
console.log(output); // --> 24.9