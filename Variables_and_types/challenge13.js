const prompt = require("prompt-sync")()

let nb=Number(prompt('enter the nb : '))

const bin=nb.toString(2)
console.log(bin)
const hex=nb.toString(16)
console.log(hex)
