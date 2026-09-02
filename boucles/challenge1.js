const prompt=require("prompt-sync")()

const nb = Number(prompt("Enter a number: "))

console.log(`le tableau de multiplication de ${nb} est:`)
for(let i=1 ; i<=10 ; i++){
console.log(`${nb} multiplier par ${i} est: ${nb*i}`);
    
    
}
