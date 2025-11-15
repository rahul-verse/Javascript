// Find the largest among 3 num. 

let a = -100; let b = 105; let c= -2; 

if(a >=b && a >=c){
    console.log(`a is the largest = ${a}`)
    if(b>c){
        console.log(`a=${a} > b =${b} > c = ${c}`)
    }else{
        console.log(`a=${a} > c =${c} > b = ${b}`)

    }
}
else if(b>a && b>c){
    console.log(`B is largest ${b}`)
    if(b>a){
        console.log(`b = ${b} > c = ${c} > a = ${a}`)
    }else{
        console.log(`b = ${b} > a = ${a} > c = ${c}`)

    }
}
else{
    console.log(`C is largest ${c}`)
    if(c>b){
        console.log(`c = ${c}> b=${b} > a =${a} > `)
    }else{
        console.log(` c =${c} > a=${a} > b = ${b}`)
    }
}