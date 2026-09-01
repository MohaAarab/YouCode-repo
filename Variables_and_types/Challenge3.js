const prompt = require("prompt-sync")()

const KILOMETRE=Number(prompt(' la distance en kilomètres : '))
const Yards = KILOMETRE * 1093.61


console.log((`${KILOMETRE} Km correspond à ${Yards} yards`))
