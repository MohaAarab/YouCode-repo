const prompt= require('prompt-sync')()


const nb = Number(prompt('entre the nb of elements : '));

const table = [];

function even(table ){
      for(let i=0 ; i<table.length ; i++){
        if(table[i] %2 == 0 ){
            console.log(table[i])
        }
      }
}


for(let i=0 ; i<nb ; i++){
    table[i] = Number(prompt(`entre the nb of elements ${i+1}: `));
}
even(table);

