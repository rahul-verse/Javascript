// Check if a year is a leap year

// If a number is divisible by 4 && also should not be divisible by 100 & and if is divisble by 400 as well. 

let year = 2028; 


if((year % 4 === 0 && year %100 !==0)|| year % 400 ===0){
    console.log(`It is a leap year: ${year}`)
}
else{
    console.log(`It's not a leap year...! ${year}`)
}