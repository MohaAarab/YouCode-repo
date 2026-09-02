const prompt = require("prompt-sync")()

const lettre=prompt('enter a character : ')
let asciiVal = lettre.charCodeAt(0)

if(asciiVal >= 65 && asciiVal <= 90){
    console.log('le character est majuscule ');

}else if(asciiVal >= 97 && asciiVal <= 122){
    console.log('le character est miniscule ');
}else{
    console.log("ce n'est pas une lettre");

}
