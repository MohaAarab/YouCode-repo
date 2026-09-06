const prompt= require('prompt-sync')()


const nb = Number(prompt('entre the nb of elements : '));

const table = [];
const table1 = [];
let arr=[];

function merge(table ){
    for(let i=0 ; i<table.length ; i++){
        arr.push(table[i])
    }
    
}


for(let i=0 ; i<nb ; i++){
    table[i] = Number(prompt(`entre the nb of elements ${i+1}: `));
}

const nb1 = Number(prompt('entre the nb of elements : '));
for(let i=0 ; i<nb1 ; i++){
    table1[i] = Number(prompt(`entre the nb of elements ${i+1}: `));
}
merge(table);
merge(table1);
console.log (arr);

