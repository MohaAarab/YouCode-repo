const prompt= require('prompt-sync')()


const nb = Number(prompt('entre the nb of elements : '));
const factor = Number(prompt('entre the factor : '));

const table = [];

function multip(arr){
    
    for(let i=0 ; i<nb; i++){
        arr[i] *= factor 
        
        
    }
console.log(`the new array : ${table}`)
}


for(let i=0 ; i<nb ; i++){
    table[i] = Number(prompt(`entre the nb of elements ${i+1}: `));
}
console.log(`the first array : ${table}`)
multip(table)