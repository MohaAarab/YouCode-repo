const prompt = require("prompt-sync")()
 
const nb=Number(prompt('entre le nomber  :'))

if(nb>0){
    console.log('le nombre est positif')
}else if(nb<0){
    console.log('le nombre est negatif')
}else{
    console.log('le nombre est null')
}
