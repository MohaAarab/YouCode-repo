const prompt=require('prompt-sync')()

function Fibonacci(n){
    let a=0
    let b=1
    for(i=0 ; i<n ; i++){
        let fibo=a+b
        a=b
        b=fibo
    }
    // console.log(a)
    return a
}

const n=Number(prompt('entrer un nomber :'))
let result = Fibonacci(n)
console.log(`the result is : ${result}`);
