const prompt=require('prompt-sync')()

function fonc(title , auteur , annee){
    const books={
        title : title ,
        auteur : auteur ,
        annee : annee  
    }
    return books;
}

const bookTitle = prompt('book title  : ');
const bookAuteur = prompt('book auteur : ');
const bookAnnee = Number(prompt('book year: '));

const livre = fonc(bookTitle,bookAuteur,bookAnnee);
console.log(livre)

