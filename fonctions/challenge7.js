const prompt=require('prompt-sync')()

function printer(n){
    for(i=n ; i>=0 ;i--){
        console.log(i);
    }
}

const n=Number(prompt('enter a nb :'))
printer(n)