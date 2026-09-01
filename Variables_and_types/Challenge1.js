const prompt = require("prompt-sync")();

let nom=prompt('entrer votre nom :')
let prenom=prompt('entrer votre prenom :')
let age=Number( prompt('entrer votre age :'))
let sex=prompt('entrer votre sex :')
let adressEmail=prompt('entrer votre adress email :')

console.log(`votre donner sont:
    le nom:${nom}
    le prenom:${prenom}
    le age:${age}
    le sex:${sex}
    le adressEmail:${adressEmail}
    `)
