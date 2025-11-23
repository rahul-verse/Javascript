// Simple calculator (+, -, *, /) using switch

let num1 = 20 ; 
let num2 = 30 ; 
let operator = "+";

switch(operator){
    case "+":
        console.log(`Sum = ${num1}+${num2}`);
        break;
    case "-":
        console.log(`Subtract = ${num1}-${num2}`);
        break;
    case "*":
        console.log(`Multiply = ${num1}*${num2}`);
        break;
    case "/":
        console.log(`Divide = ${num1}/${num2}`);
        break;
}