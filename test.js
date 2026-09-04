// const input='youcode';
// console.log(input[0].toUpperCase() + input.slice(1,))

// console.log(5+"3"-3);//50
// console.log(5+3-"3");//5
// console.log("5"+3-3);
    
const input='youcode';
let output="";

for(let i=1 ;i<input.length ; i++){
    output+=input[i];
}
console.log(input[0].toUpperCase() + output);