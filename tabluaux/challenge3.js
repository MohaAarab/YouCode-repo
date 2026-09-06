const prompt= require('prompt-sync')()

const nb = Number(prompt('entre the nb of elements : '));

const table = [];
let tableSum =0;
for(let i=0 ; i<nb ; i++){
    table[i] = Number(prompt(`entre the nb of elements ${i+1}: `));
    tableSum += table[i]


}


// console.log(table);
console.log(`the sum of the elements in the array is : ${tableSum}`);