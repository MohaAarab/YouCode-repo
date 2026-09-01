const prompt = require("prompt-sync")()

 

const kilometreParHeure=Number(prompt(' la vitesse en kilomètres par heure : '))
const MetresParSeconde = kilometreParHeure * 0.27778


console.log((`${kilometreParHeure} km/h correspond à ${MetresParSeconde} m/s`))

