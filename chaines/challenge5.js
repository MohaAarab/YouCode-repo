const prompt=require('prompt-sync')();

const n=prompt('entrer un mote : ');
//const str='kayak';

let i=0;
let lenght=0;
while(n[i] != undefined){
    lenght++;
    i++;
    
}
let revN="";
for(let i=lenght-1 ; i>=0 ; i--){
    revN+=n[i]
}
console.log(`le 1er mote : ${n}`);
console.log(`le 2eme mote : ${revN}`);
