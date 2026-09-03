const prompt=require('prompt-sync')()

function pair(n){
    if(n%2 == 0){
        return true
    }else{
        return false
    }
}

const n=Number(prompt('enter a nb :'))
let result=pair(n)
console.log(result);
