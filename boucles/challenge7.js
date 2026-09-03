const prompt=require('prompt-sync')()
//12345
const a = prompt("Enter a number: ")
// const b = a.length
let c = ""
// let d = null
for(let i= a.length -1; i>=0 ; i--){
    c +=a[i]
    
}
    console.log(c);
