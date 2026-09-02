const prompt = require("prompt-sync")()

const annee=Number(prompt('entre le nomber des annees :'))
const mois=annee * 12
const jour=annee * 365
const heure=annee * 365 * 24
const minute=annee * 365 * 24 * 60
const seconde=annee * 365 * 24 * 60 * 60

console.log("\n===== MENU =====")
console.log("1. Convertir en mois")
console.log("2. Convertir en jours")
console.log("3. Convertir en heures")
console.log("4. Convertir en minutes")
console.log("5. Convertir en secondes")

let choix = Number(prompt(console.log('votre choix :')))

switch(choix){
    case 1:
        console.log(`l'annee en mois : ${mois}`);
        break
    case 2:
        console.log(`l'annee en jours : ${jour}`);
        break
    case 3:
        console.log(`l'annee en heures : ${heure}`);
        break
    case 4:
        console.log(`l'annee en minutes : ${minute}`);
        break
    case 5:
        console.log(`l'annee en secondes: ${seconde}`);
        break
        
        
}