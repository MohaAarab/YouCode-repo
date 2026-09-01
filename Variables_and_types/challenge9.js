const prompt = require("prompt-sync")()


const x1 = Number(prompt("Enter the  number x1 : "))
const y1 = Number(prompt("Enter the first number y1 : "))
const z1 = Number(prompt("Enter the first number z1 : "))

const x2 = Number(prompt("Enter the  number x1 : "))
const y2 = Number(prompt("Enter the first number y2 : "))
const z2 = Number(prompt("Enter the first number z2: "))


const Distance= (((x2-x1)**2) + ((y2-y1)**2) + ((z2-z1)**2)) ** (1/2)

console.log(Distance)
