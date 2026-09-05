const prompt = require('prompt-sync')()

const n=Number(prompt('entre a number : '))


let a=0 
let b=1 
for(let i=0 ;i<n ;i++){
    let fibo=a+b
    a=b
    b=fibo
}
console.log(a);


// this version is if you want the whole serie from f(1) to f(n)
// const prompt = require('prompt-sync')()

// const n=Number(prompt('entre a number : '))


// let a=0 
// let b=1 
// for(i=0 ;i<n ;i++){
    // console.log(a);
//     let fibo=a+b
//     a=b
//     b=fibo
// }
