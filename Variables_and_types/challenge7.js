const prompt = require("prompt-sync")()

const Nb1 = Number(prompt("Enter the  number 1 : "))
const Nb2 = Number(prompt("Enter the first number 2 : "))
const Nb3 = Number(prompt("Enter the first number 3 : "))

const pon1=2
const pon2=3
const pon3=5

const moyennePonderee=(((Nb1*pon1) + (Nb2*pon2) + (Nb3*pon3) ) / (pon1+pon2+pon3))

console.log(moyennePonderee)