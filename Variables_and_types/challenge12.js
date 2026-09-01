const prompt = require("prompt-sync")()

let nb=Number(prompt('enter the nb : '))

const a=Math.floor(nb%10)
const c=Math.floor(nb/10)%10
const b=Math.floor(nb/100)%10
const d=Math.floor(nb/1000)

console.log(a,c,b,d)

