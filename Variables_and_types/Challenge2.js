const prompt = require("prompt-sync")()

let C=Number(prompt('la température en Celsius : '))
const K = C + 273.15

console.log((`${C} °C correspond à ${K} K`))

