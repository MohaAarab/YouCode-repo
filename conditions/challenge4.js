const prompt = require("prompt-sync")()

let a = Number(prompt("Enter a: "))
let b = Number(prompt("Enter b: "))
let c = Number(prompt("Enter c: "))

const delta = (b ** 2) - (4 * a * c)

if (delta > 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)

    console.log(`x1 : ${x1} and x2 : ${x2}`)

} else if (delta === 0) {
    const x3 = -b / (2 * a)

    console.log(`x3 : ${x3}`)

} else {
    console.log("Aucune solution")
}
