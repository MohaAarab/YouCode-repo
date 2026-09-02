const prompt=require('prompt-sync')()

let num1 = Number(prompt('enter num1 :'))
let num2 = Number(prompt('enter num2 :'))
console.log(`La valeur de num1 avant = ${num1}\n La valeur de num2 avant = ${num2}`)
let x;
x = num1
num1 = num2
num2 = x
console.log(`La valeur de num1 apres = ${num1}\n La valeur de num2 apres = ${num2}`)