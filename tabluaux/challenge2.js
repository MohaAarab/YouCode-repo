const prompt=require('prompt-sync')()

const number=Number(prompt('enter the nb of characters in the array : '));
let arr=[];

for(let i=0 ; i<number ; i++){
   let elem = prompt(`enter element nb ${i+1} : `)
    arr.push(elem)
}
console.log(arr)