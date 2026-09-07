const prompt=require('prompt-sync')();

const point={
    x : null ,
    y : null ,
}

point.y = Number(prompt('entrer une y : '));
point.x = Number(prompt('entrer une x : '));

console.log(point);

point.y = Number(prompt('entrer une y : '));
point.x = Number(prompt('entrer une x : '));

console.log(point);