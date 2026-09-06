const prompt= require('prompt-sync')()


const nb = Number(prompt('entre the nb of elements : '));

const table = [];

// let arr = [];
// function replace(table ,arr){
//     for(let i=0 ; i<table.length ; i++){
//        for(let j=0 ; j <table.length ; j++){
//             if(table[i] == table[j] && !arr.includes(table[i])){
//                 arr[arr.length]=table[i];  
                
//             }
            
//        }
       
//     }
        
        
   
//     console.log(`the  array : ${arr}`);
// }


for(let i=0 ; i<nb ; i++){
    table[i] = Number(prompt(`entre the nb of elements ${i+1}: `));
}

const oldValue=Number(prompt(`the old value to replace : `));
const newValue=Number(prompt(`the new value  : `));

for(let i=0 ; i< table.length ; i++){
    if(table[i] === oldValue){
        table[i] = newValue;
    }
}

//replace(table,arr);
console.log(table)
