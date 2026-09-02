const prompt=require("prompt-sync")()

const a = Number(prompt("Enter a: "))
let n=a //4+1=5+2=7
for(let i=1 ; i<a ;i++){
    n=n+i
}
    console.log(n);
