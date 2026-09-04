const prompt=require('prompt-sync')()

const n=Number(prompt('enter a number :'))
for(i=1;i<10;i++){
    console.log(`${n} * ${i} = ${n*i}`);
    
}