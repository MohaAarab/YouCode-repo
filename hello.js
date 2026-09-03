const prompt = require("prompt-sync")()

const a = Number(prompt("Enter the first number: "))
const operator = prompt("Enter an operator (+, -, *, /): ")
const b = Number(prompt("Enter the second number: "))

let resutls = null

if(operator === '+'){
    resutls=a+b
}else if(operator === '-'){
    resutls=a-b
}else if(operator === '*'){
    resutls=a*b
}else if(operator === '/'){
    resutls=a/b
}

console.log(resutls)


