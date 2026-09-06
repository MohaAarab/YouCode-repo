const prompt= require('prompt-sync')()


const nb = Number(prompt('entre the nb of elements : '));

const table = [];

function min(arr){
    let min= arr[0];
    for(let i=0 ; i<nb; i++){
        if(min > arr[i]){
            min=arr[i];
        }
        
        
    }
console.log(`the min value is : ${min}`)
}


for(let i=0 ; i<nb ; i++){
    table[i] = Number(prompt(`entre the nb of elements ${i+1}: `));
}
min(table)