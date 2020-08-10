const number1 = prompt("please enter number");

let result = gallonsToLiters(number1);
alert(result);

function gallonsToLiters(number1){
const newNumber = parseFloat(number1)
return newNumber * 3.785 ;
}