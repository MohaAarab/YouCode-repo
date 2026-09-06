const prompt= require('prompt-sync')()


const nb = Number(prompt('entre the nb of elements : '));

const table = [];

function max(arr){
    let max= arr[0];
    for(let i=0 ; i<nb; i++){
        if(max < arr[i]){
            max=arr[i];
        }
        
        
    }
console.log(`the max value is : ${max}`)
}


for(let i=0 ; i<nb ; i++){
    table[i] = Number(prompt(`entre the nb of elements ${i+1}: `));
}
max(table)