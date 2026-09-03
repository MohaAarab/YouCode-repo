const prompt=require('prompt-sync')()

function sum(a,b){
return a+b

}



const a=Number(prompt('entrer le nb a : '))
const b=Number(prompt('entrer le nb b : '))
let resulte = sum(a,b)
console.log(`le resultat est : ${resulte} `);

