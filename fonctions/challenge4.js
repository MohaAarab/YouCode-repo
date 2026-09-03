const prompt=require('prompt-sync')()


function min(a,b){
if(a<b){
    return a
}else{
    return b
}

}

const a=Number(prompt('entrer le nb a : '))
const b=Number(prompt('entrer le nb b : '))
let resulte = min(a,b)
console.log(`le plus petit des deux est : ${resulte} `);

