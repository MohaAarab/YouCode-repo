const prompt=require('prompt-sync')()

const n=Number(prompt('enter a nb :'))

for(let i=0 ; i<n ; i++){ // loop for rows
    let space=""
    for(let j=0 ;j<n-i ; j++){ // loop for spaces
        space+=" "
    }
    for(let k=0 ; k<(2*i)+1 ; k++){
        space+="*"
    }
    console.log(space);
    
}