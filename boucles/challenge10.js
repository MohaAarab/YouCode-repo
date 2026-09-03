const prompt=require("prompt-sync")()

const a = Number(prompt("Enter a: "))
let n=a
for(let i=1 ; i<a ;i++){
    n=n+i
}
    console.log(n);
