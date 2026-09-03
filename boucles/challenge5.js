const prompt=require("prompt-sync")()

const base = Number(prompt("Enter base: "))
const exposant = Number(prompt("Enter exposant: "))
let result=1

for(i=0 ; i<exposant ; i++){
    result *=base
}
console.log(result);
