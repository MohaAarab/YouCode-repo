const prompt=require(`prompt-sync`)();

const contacts=[
    {Nom : 'mohamed' , Numéro_de_téléphone : '0123456789' , Adresse_email : 'exemple1@gmail.com'},
    {Nom : 'redwan' , Numéro_de_téléphone : '0987654321' , Adresse_email : 'exemple2@gmail.com'},
    {Nom : 'mrwan' , Numéro_de_téléphone : '0987612345' , Adresse_email : 'exemple3@gmail.com'}
];

function menu (){
    console.log(`
        #######################  Menu  #######################
         1. Ajouter un Contact. 
         2. Modifier un Contact. 
         3. Supprimer un Contact. 
         4. Rechercher un Contact. 
         5. Afficher Tous les Contacts. 
`);
}
function add(){
    let Nom=prompt(`enter the new contact name : `);
    let Numéro_de_téléphone=prompt(`enter the phone number : `);
    let Adresse_email=prompt(`enter the adresse e-mail : `);
    const contact={Nom:Nom , Numéro_de_téléphone:Numéro_de_téléphone , Adresse_email:Adresse_email};
    contacts.push(contact);
    
};
function edit(){
    let Nom=prompt(`enter the contact name : `);
    let tl_mod='';
    let adr_mod='';
    for(let i=0 ; i<contacts.length ; i++){
        if(contacts[i].Nom == Nom ){
            tl_mod=prompt(`enter the phone number modification : `);
            contacts[i].Numéro_de_téléphone = tl_mod;
            adr_mod=prompt(`enter the email adresse  modification : `);
            contacts[i].Adresse_email = adr_mod;
            break;
        }else{
            console.log(`this contact do not exist`)
        }}
};
function del(){
    let Nom=prompt(`enter the contact name : `);
    let arr=[]
    for(let i=0 ;  i<contacts.length ; i++){
        if(contacts[i].Nom !== Nom){
            arr.push(contacts[i]);
            }
    }
    console.log(arr);
};
function show(){
    for(let i=0 ; i<contacts.length ; i++){
        console.log(contacts[i]);
    }
};
function Search(){
    let Nom=prompt(`enter the contact name : `);
    let cond=false ; 
    for(let i=0 ; i<contacts.length ; i++){
        if(contacts[i].Nom == Nom){
            console.log(contacts[i])
            cond=true;
            break;
            }}
    if(cond == false){
    console.log(`this book is not in the bookstore`) ;
    }
};

menu();
let choice=prompt(`enter you choice : `)
switch(choice){
    case '1':
        add();
        break;
    case '2':
        edit();
        break;
    case '3':
        del();
        break;
    case '4':
        Search();
        break;
    case '5':
        show();
        break;
}
