const prompt=require('prompt-sync')()

function menu_princ() {
    console.log(`
######## MENU ########
1. Home
2. Products
3. Services
#. Exit
`);
}

function home_menu() {
    console.log(`
1. Welcome
2. Introduction
3. Highlights
4. News
#. Return
`);
}

function products_menu() {
    console.log(`
1. New Arrivals
2. Best Sellers
3. Categories
#. Return
`);
}

        function New_Arrivals() {
            console.log(`
        1. Product A
        2. Product B
        3. Product C
        #. Return
        `);
        }

        function Best_Sellers() {
            console.log(`
        1. Product X
        2. Product Y
        3. Product Z
        #. Return
        `);
        }

        function Categories() {
            console.log(`
        1. Electronics
        2. Clothing
        3. Accessories
        #. Return
        `);
        }

function services_menu() {
    console.log(`
1. Consulting
2. Support
3. Training
#. Return
`);
}

let mainMenu = '';

do {
    menu_princ();
    mainMenu = prompt('Enter your choice: ');

    switch (mainMenu) {
        case '1': {
            let homeChoice = '';

        do {
                home_menu();
                homeChoice = prompt('Enter your choice: ');

                switch (homeChoice) {
                    case '1':
                        console.log('Welcome!');
                        break;
                    case '2':
                        console.log('Introduction');
                        break;
                    case '3':
                        console.log('Highlights');
                        break;
                    case '4':
                        console.log('News');
                        break;
                    case '#':
                        console.log('Returning to main menu...');
                        break;
                    default:
                        console.log('Invalid input');
                }

        } while (homeChoice !== '#');

            break;
        }

        case '2': {
            let prod_menu = '';

        do {
                products_menu();
                prod_menu = prompt('Enter your choice: ');

                switch (prod_menu) {

                    case '1':
                        New_Arrivals();
                        break;
                    case '2':
                        Best_Sellers();
                        break;
                    case '3':
                        Categories();
                        break;
                    case '#':
                        console.log('Returning to main menu...');
                        break;
                    default:
                        console.log('Invalid input');
                }

        } while (prod_menu !== '#');

            break;
        }
    case '3':{
        let serviceChoice='';
        do {
                services_menu();
                serviceChoice = prompt('Enter your choice: ');

                switch (serviceChoice) {
                    case '1':
                        console.log('Consulting');
                        break;
                    case '2':
                        console.log('Clothing');
                        break;
                    case '3':
                        console.log('Accessories');
                        break;
                    case '#':
                        console.log('Returning to main menu...');
                        break;
                    default:
                        console.log('Invalid input');
                }

        } while (serviceChoice !== '#');

            break;
        }
    }
}while(mainMenu !== '#')