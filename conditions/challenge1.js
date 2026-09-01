const prompt = require("prompt-sync")()

let nb=Number(prompt('enter a nb : '))
if(nb%2 ==0){
    console.log('paire');
}else{
    console.log('impaire');   
}
