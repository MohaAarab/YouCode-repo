const prompt=require('prompt-sync')();

let n=prompt('entrer un mote : ');
let n1=prompt('entrer un mote : ');

function sort(arr){
    
    let len=arr.length;
    for(let i=0 ; i<len ; i++){

        for(let j=0 ; j<len-i-1 ; j++){ // the len-i-1 is for removing the last char in each loop
            if(arr[j] > arr[j+1]){
                let swap=arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
                
            }

        }
        
    }
    return arr;
}

if(n.length == n1.length){
    
    n = n.toLowerCase();
    n1 = n1.toLowerCase();
    
    let arr=[];
    for(let i=0 ; i<n.length ; i++){
      let ascii= n.charCodeAt(i);
      arr.push(ascii);
      }
    let res = sort(arr);
    //console.log(arr);
 
    let arr1=[];
    for(let i=0 ; i<n.length ; i++){
      let ascii1= n1.charCodeAt(i);
      arr1.push(ascii1);
      }
    let res1= sort(arr1);

    //console.log(arr1);
     let same = true

    for(let i = 0; i < res.length; i++) {
        if(res[i] !== res1[i]) {
            same = false
            break;
        }
    }

    if(same){
        console.log(`this words are  anagramme `);
    }else{
        console.log(`this words are not anagramme`);
    }

}else{
    console.log(`this words are not anagramme`);
}