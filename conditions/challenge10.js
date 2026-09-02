const prompt=require('prompt-sync')()

const date=prompt('enter la date (ex:15/09/2012):')


//let [jour,mois,anne]=date.split('/')
const split=date.split('/')
const jour=split[0]
let mois=split[1]
const anne=split[2]

switch(mois){
    case '01':
        mois='janvier'
        break
    case '02':
        mois='fevrier'
        break
    case '03':
        mois='mars'
        break
    case '04':
        mois='avril'
        break
    case '05':
        mois='mai'
        break
    case '06':
        mois='juin'
        break
    case '07':
        mois='juillet'
        break
    case '08':
        mois='aout'
        break
    case '09':
        mois='septomber'
        break
    case '10':
        mois='october'
        break
    case '11':
        mois='november'
        break
    case '12':
        mois='december'
        break

}
console.log(`the date you entered is ${jour}-${mois}-${anne}`);
/*console.log(split);
console.log(jour);
console.log(mois);
console.log(anne);*/

