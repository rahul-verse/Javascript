let age = 101;
let TicketPrice = 400;

if (age >= 2 && age < 18) {
    console.log(`Since you are a child you get a 50rs discount\nYour ticket price is: ${TicketPrice - 50}`);
}
else if (age >= 18 && age < 60) {
    console.log(`You are an adult. Your ticket price is: ${TicketPrice}`);
}
else if (age >= 60 && age <= 100) {
    console.log(`You are a senior and get a 100rs discount\nYour ticket price is: ${TicketPrice - 100}`);
}
else {
    console.log("Enter a valid age.");
}
