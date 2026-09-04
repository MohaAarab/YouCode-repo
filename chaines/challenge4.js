const prompt=require('prompt-sync')()

const chaine1=prompt('enter a chaines of characters 1 : ')
const chaine2=prompt('enter a chaines of characters 2 : ')

if(chaine1 == chaine2){
    console.log(`bouth strings are equal`);
}else{
    console.log(`bouth strings are not equal`);
    
}