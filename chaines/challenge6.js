const prompt=require('prompt-sync')();

const string=prompt('enter a string : ');
const n=prompt('enter a number : ');
if(string.includes(n)){
    
    let count=0;
    for(let i=0 ; i<string.length ; i++){
        if(string[i] == n){
            count++;
        }
    }
console.log(`this character is repited ${count} times`)

}else{
    console.log(`this character is not in the string`)
}