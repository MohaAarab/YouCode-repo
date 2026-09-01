const prompt = require("prompt-sync")()

let a=Number(prompt('enter le nb 1: '))
let b=Number(prompt('enter le nb 2: '))

if(a!==b){
    console.log(`la somme des deux valeur ${a+b}`);   
}else{
    const res=(a+b)*3
    console.log(res);  
}
