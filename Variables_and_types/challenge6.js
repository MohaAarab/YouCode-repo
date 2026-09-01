const prompt = require("prompt-sync")()

const a=Number(prompt('nombre a :'))
const b=Number(prompt('nombre b :'))

console.log(`
1:${a +b}
2:${a -b}
3:${a /b}
4:${a *b}
`);
if(b == 0){
    console.log(`3:impossible`);

}else{
    console.log(`3:${a /b}`);
   
}

