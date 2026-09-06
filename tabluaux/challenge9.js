const prompt= require('prompt-sync')()


const nb = Number(prompt('entre the nb of elements : '));

const table = [];

function sort(arr){
    for(let i=0 ; i<nb ; i++){
        for(let j=0 ; j<nb ;j++){
            if(arr[i] > arr[j]){
               let swap=arr[i];
               arr[i]=arr[j];
               arr[j]=swap 
            }
        }
    }
        
        
   
    console.log(`the sorted array : ${table}`)
}


for(let i=0 ; i<nb ; i++){
    table[i] = Number(prompt(`entre the nb of elements ${i+1}: `));
}
sort(table)