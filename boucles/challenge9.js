const prompt=require('prompt-sync')()

let n=Number(prompt('entrer un entier positif :'))
let nombreDeChiffres=0

while(n>0){
    n = Math.floor(n/10)
    nombreDeChiffres++
}
console.log(nombreDeChiffres);
