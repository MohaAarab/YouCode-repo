const prompt = require("prompt-sync")()

const Nb1 = Number(prompt("Enter the  number 1 : "))
const Nb2 = Number(prompt("Enter the first number 2 : "))
const Nb3 = Number(prompt("Enter the first number 3 : "))

const moyenneGeometrique = (Nb1 * Nb2 * Nb3) ** (1/3)
console.log(`la moyenne geometrique est : ${moyenneGeometrique}`)

