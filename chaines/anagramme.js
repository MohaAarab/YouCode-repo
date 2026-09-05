const prompt=require('prompt-sync')();

const n=prompt('entrer un mote : ');
const n1=prompt('entrer un mote : ');

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
    
    n.toLowerCase();
    n1.toLowerCase();
    
    let arr=[];
    for(let i=0 ; i<n.length ; i++){
      let ascii= n.charCodeAt(i);
      arr.push(ascii);
      }
    sort(arr);
    //console.log(arr);
 
    let arr1=[];
    for(let i=0 ; i<n.length ; i++){
      let ascii1= n1.charCodeAt(i);
      arr1.push(ascii1);
      }
    sort(arr1);
    //console.log(arr1);

}else{
    console.log(`this words are not anagramme`);
}