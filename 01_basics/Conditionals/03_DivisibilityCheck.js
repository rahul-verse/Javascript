// Check if a number is divisible by both 3 and 5.

let num = 30; 

if(num % 3==0 && num %5 == 0){
    console.log("It is divisble by both");
}
else if(num % 3 == 0 && num % 5 !== 0){
    console.log(`It is divisible by 3 not by 5`)
}
else if(num % 5 == 0 && num % 3 != 0){
    console.log(`It is divisble by 5 but not by 3`)
}
else{
    console.log("It is not divisible by both. ")
}