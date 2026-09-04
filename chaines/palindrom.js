const prompt=require('prompt-sync')();

const n=prompt('entrer un mote : ');
//const str='kayak';

let i=0;
let lenght=0;
while(n[i] != undefined){
    lenght++;
    i++;
    
}
//console.log(lenght);

let revN="";
for(let i=lenght-1 ; i>=0 ; i--){
    revN+=n[i]
}
if(n == revN){
    console.log(`the word is a palindrom`);
}else{
    console.log(`the word is not a palindrom`);
    
}
