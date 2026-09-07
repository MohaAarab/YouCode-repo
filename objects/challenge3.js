const prompt=require('prompt-sync')()


const rectangle={
    longueur : null ,
    largueur : null ,
}

rectangle.longueur = Number(prompt('entrer une longueur : '));
rectangle.largueur = Number(prompt('entrer une largueur : '));

function area(object){
    const area = object.longueur * object.largueur;
    console.log(`the area of this rectagular is : ${area}`);
}
area(rectangle)
console.log(rectangle)