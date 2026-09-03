const prompt=require('prompt-sync')()


function max(a,b){
if(a>b){
    return a
}else{
    return b
}

}

const a=Number(prompt('entrer le nb a : '))
const b=Number(prompt('entrer le nb b : '))
let resulte = max(a,b)
console.log(`le plus grand des deux est : ${resulte} `);

