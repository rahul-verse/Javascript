// SwapTwo numbers without using third. 
let a = 25;
let b = 10;

console.log(`Current value of a = ${a} and b = ${b}`)
a = a+b;
b = a-b;
a = a-b; 
console.log(`Current value of a = ${a} and b = ${b}`)