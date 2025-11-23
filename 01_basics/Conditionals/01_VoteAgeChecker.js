// Check if a person can vote 

let age = 1009;

// if(age<0 || age>=110){
//     console.log(`Enter a valid age`)
// }
// else{
//     if( age>=18 && age<=110){
//     console.log(`You can vote since you are ${age}`)
// }
// else{
//     console.log(`You are minor cannot vote.`)
// }
// }


// Shorter version; 

if(age<0 || age>110) console.log("Enter a valid age")
    else if(age>=18) console.log("You can vote")
        else console.log("You cannot vote. ")