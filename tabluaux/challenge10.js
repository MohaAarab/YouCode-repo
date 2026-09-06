const prompt= require('prompt-sync')()


const nb = Number(prompt('entre the nb of elements : '));

const table = [];
const x=Number(prompt(`enter the nb to search for : `));
function search(arr , x){
    for(let i=0 ; i<nb ; i++){
       if(arr[i] == x){
        return i;
    }
    }
        
        
   
    console.log(`the  array : ${table}`);
}


for(let i=0 ; i<nb ; i++){
    table[i] = Number(prompt(`entre the nb of elements ${i+1}: `));
}
let result = search(table,x);
if(result >= 0){
    console.log(`this element exist and it's index is : ${result}`);
    
}else{
    console.log(`this element do not exist `);

}