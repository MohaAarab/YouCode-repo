const prompt=require('prompt-sync')()


function factorialle(a){
    for(i=1 ; i<a ; i++){
        fact = fact*i
    }

    return fact
}



const a=Number(prompt('entrer le nb a : '))

let fact=a
let resulte = factorialle(a)
console.log(`le factorialle est : ${resulte} `);

