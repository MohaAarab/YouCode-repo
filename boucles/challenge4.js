const prompt=require('prompt-sync')()


const a = Number(prompt("Enter a: "))
for(let i=0 ; i<a ; i++){
    const b=(2*i)+1 //2k+1 (form de nombre impair)
    console.log(b);
}