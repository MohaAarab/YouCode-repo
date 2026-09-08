const prompt=require('prompt-sync')();

const books =[
    {title : 'The Alchemist' , author : 'Paulo Coelho' , price : 120 , quantity : 10 },
    {title : '1984' , author : 'George Orwell' , price : 90 , quantity : 7 },
    {title : 'The Great Gatsby' , author : 'F. Scott Fitzgerald' , price : 100 , quantity : 5 }
];

function menu(){
    console.log(`
        #######################  Menu  #######################
         1. Add a book to stock. 
         2. View all available books. 
         3. Search for a book by its title. 
         4. Update the quantity of a book. 
         5. Remove a book from stock. 
         6. Show the total number of books in stock.`)
};
function add(){
    let Title=prompt(`enter the title of the book : `);
    let Author=prompt(`enter the author of the book : `);
    let Price=Number(prompt(`enter the price of the book : `));
    let Quantity=Number(prompt(`enter the quantity of the book : `));
    const book={ Title : Title , Author : Author , Price : Price , Quantity : Quantity };
    books.push(book);
    //books[books.length] = book;
    console.log(books);
};

function show(){
    for(let i=0 ; i<books.length ; i++){
        console.log(books[i]);
    }
};

function qua_update(){
    let title=prompt(`the title of the book to update : `);
    for(let i=0 ; i<books.length ; i++){
        if(books[i].title == title){
            let quantity=prompt(`the quantity of the book : `);
            books[i].quantity = quantity;
        }else{
            console.log(`this book is not in the bookstore`)
        }
    }
};

function Search(){
    let title=prompt(`the title of the book to update : `);
    let con=false;
    for(let i=0 ; i<books.length ; i++){
        if(books[i].title == title){
            console.log(books[i]);
            con=true;
            break;
        }
    }
    if(con == false){
    console.log(`this book is not in the bookstore`) 
    }}

function total(){
    let total=0;
    for(let i=0 ; i<books.length ; i++){
        total+=books[i].quantity;
    }
    console.log(`the total of the book in the bookstore is : ${total}`)
};
function Remove(){
    let title=prompt(`the title of the book to update : `);
    let arr=[]
    for(let i=0 ; i<books.length ; i++){
            if(books[i].title !== title){
                arr.push(books[i]);
            }
        }
        console.log(arr)
    }
    

menu();
let choice=prompt(`enter your choice : `);
    switch(choice){
        case '1':
            add();
            break;
        case '2':
            show();
            break;
        case '3':
            Search();
            break;
        case '4':
            qua_update();
            break;
        case '5':
            Remove();
            break;
        case '6':
            total();
            break;
    }