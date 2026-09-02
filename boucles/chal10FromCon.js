const prompt = require('prompt-sync')()

const date = prompt('enter la date (ex: 15/09/2012):')
const date_array = []
let char_sum = ""
let mois = null

for (let char of date) {
    if (char === '/') {
        date_array.push(char_sum)
        char_sum = ""
        continue
    } else {
        char_sum = char_sum + char
    }
}

// Ajouter la dernière partie (l'année)
date_array.push(char_sum)

const jour = date_array[0]
const mois_num = date_array[1]
const anne = date_array[2]

switch (mois_num) {
    case '01':
        mois = 'janvier'
        break
    case '02':
        mois = 'fevrier'
        break
    case '03':
        mois = 'mars'
        break
    case '04':
        mois = 'avril'
        break
    case '05':
        mois = 'mai'
        break
    case '06':
        mois = 'juin'
        break
    case '07':
        mois = 'juillet'
        break
    case '08':
        mois = 'aout'
        break
    case '09':
        mois = 'septembre'
        break
    case '10':
        mois = 'octobre'
        break
    case '11':
        mois = 'novembre'
        break
    case '12':
        mois = 'decembre'
        break
}

console.log(`the date you entered is ${jour}-${mois}-${anne}`)
