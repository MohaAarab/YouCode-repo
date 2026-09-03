const prompt=require('prompt-sync')()

function prod(a,b){
return a*b

}

const a=Number(prompt('entrer le nb a : '))
const b=Number(prompt('entrer le nb b : '))
let resulte = prod(a,b)
console.log(`le resultat est : ${resulte} `);

