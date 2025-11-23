// Check if a triangle is valid (sum of two sides > third side).

let a = 10;
let b = 20; 
let c = 30;
let sum = 0; 

if(a+b > c && b+c > a && a+c>b){
    console.log("It is triangle.")
}
else{
    console.log('It is not a valid traingle.')
}