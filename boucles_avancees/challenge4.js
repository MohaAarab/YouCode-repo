const prompt = require("prompt-sync")()

let nb=prompt('enter the nb : ')
let result=""
const a=Math.floor(nb%10)
    result+=a
const c=Math.floor(nb/10)%10
    result+=c
const b=Math.floor(nb/100)%10
    result+=b
const d=Math.floor(nb/1000)
    result+=d
console.log(result)
