const prompt=require('prompt-sync')()

const n=Number(prompt('enter a number :'))

for(let i=1 ; i<=n ; i++){
    let conter=0
    for(let j=1 ; j<=n ; j++){
        if(i % j == 0){
            conter++
        }
    }
    
    if(conter == 2){
        console.log(i);
    }
  
}