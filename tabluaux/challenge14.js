const prompt= require('prompt-sync')()


const nb = Number(prompt('entre the nb of elements : '));

const table = [];

function average(table ){
    let sum=0;
    let avr;
    const len=table.length
    for(let i=0 ; i<len ; i++){
        sum+=table[i];
        }
    avr = sum/len;
    return avr;
}


for(let i=0 ; i<nb ; i++){
    table[i] = Number(prompt(`entre the nb of elements ${i+1}: `));
}
console.log (`the avrege nb is : ${average(table)}`);

