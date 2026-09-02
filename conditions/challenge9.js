const prompt = require('prompt-sync')();

const moyenne = Number(prompt("entrer une moyenne : "));

if (moyenne < 10 ){
    console.log("vous etes recalé");
}else if ( moyenne < 12 && moyenne >= 10 ) {
    console.log("mention passable");
}else if ( moyenne >= 12 && moyenne < 14 ) {
    console.log("mention assez bien");
}else if ( moyenne < 16 && moyenne >= 14 ) {
    console.log("mention bien");
}else if (  moyenne >= 16 ) {
    console.log("mention tres bien");
}