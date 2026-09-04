const prompt=require('prompt-sync')()

const n=Number(prompt('enter a number : '))

let result=0

for(i=1 ; i<=n ; i++){
    result+=i//+(i+1)
}
console.log(result);
