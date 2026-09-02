const prompt=require("prompt-sync")()

const a = Number(prompt("Enter a: "))
let factor=a
for(let i=1 ; i<a ;i++){
    factor=factor*i
  
}
    console.log(factor);
