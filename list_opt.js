const prompt=require('prompt-sync')()

const menu = {
    home : {
        welcome : "Welcome",
        aboutUs : "About-us",
        contact : "Contact",
    },

    products : {
        newArrivals : "new Arrivals",
        bestSellers : "Best Sellers",
        categories : "Categories",
    },

    services : {
        consulting : "Consulting",
        support : "Support",
        faq : "FAQ",
    },
};

function menuSaisi(){
    console.log((`    Menu    
    1-Home 
    2-Products
    3-Services 
    `));
}

function homeMenu(){
    console.log((`    Home    
        1-Welcome 
        2-About-us
        3-Contact 
        #-Back
        `));
}

function produitsMenu(){
    console.log((`    Products    
        1-New arrivals 
        2-Best sellers
        3-Categories 
        #-Back
    `));
}

function servicesMenu(){
    console.log((`    Products    
        1-Consulting
        2-Support
        3-FAQ
        #-Back
    `));
}

let choix = 0;
do{

    switch(choix){
        case 0 :
                menuSaisi();
                choix = Number(prompt(`Saisir votre choix :`));
                break;
        case 1 :
            homeMenu();
            let home =prompt();
            switch(home){
                case '1' : console.log(menu.home.welcome);
                break;
                case '2' : console.log(menu.home.aboutUs);
                break;
                case '3' : console.log(menu.home.contact);
                break;
                case '#' : choix = 0;
                break;
            };
        break;
        case 2 :
            produitsMenu();
            let produits =prompt();
            switch(produits){
                case '1' : console.log(menu.products.newArrivals);
                break;
                case '2' : console.log(menu.products.bestSellers);
                break;
                case '3' : console.log(menu.products.categories);
                break;
                case '#' : choix = 0;
                break;
            };
        break;
        case 3 : 
            servicesMenu();
            let services =prompt();
            switch(services){
                case '1' : console.log(menu.services.consulting);
                break;
                case '2' : console.log(menu.services.support);
                break;
                case '3' : console.log(menu.services.faq);
                break;
                case '#' : choix = 0;
                break;
            };
        break;
    };
}while(choix !== 4);