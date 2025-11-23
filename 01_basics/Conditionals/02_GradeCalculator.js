// Grade calculator (A, B, C, D, F based on marks).
// Let A = 90+ , B= 80+ , C=60-80 , D=40-60 ,F= fail

let marks = 95;

if (marks >= 90) {
    console.log("You get A grade");
} 
else if (marks >= 80 && marks < 90) {
    console.log("You get B grade");
} 
else if (marks >= 60 && marks < 80) {
    console.log("You get C grade");
} 
else if (marks >= 40 && marks < 60) {
    console.log("You get D grade");
} 
else {
    console.log("You scored below 40 — you fail");
}
