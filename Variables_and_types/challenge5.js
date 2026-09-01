const prompt = require("prompt-sync")()

const temp=Number(prompt('la température en Celsius :'))

if(temp<0){
    console.log('Solid')

}else if(0<=temp && temp<100){
    console.log('Liquide')

}else if(temp>=100){
    console.log('Gaz')

}