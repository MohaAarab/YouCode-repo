// // const input='youcode';
// // console.log(input[0].toUpperCase() + input.slice(1,))

// // console.log(5+"3"-3);//50
// // console.log(5+3-"3");//5
// // console.log("5"+3-3);
    
// const input='12345';
// // let output="";

// // for(let i=1 ;i<input.length ; i++){
// //     output+=input[i];
// // }
// // console.log(input[0].toUpperCase() + output);
// let res = input.split("")
// console.log(res) // 

const prompt = require('prompt-sync')();

const menu = Number(prompt(`
######## MAIN MENU ########
1. Home
2. About Us
3. Contact
4. Products
5. Services
`));

switch (menu) {

    // ================= HOME =================
    case 1:
        const home = Number(prompt(`
######## HOME ########
1. Welcome
2. Introduction
3. Highlights
4. News
`));

        switch (home) {
            case 1:
                console.log("Welcome");
                break;

            case 2:
                console.log("Introduction");
                break;

            case 3:
                console.log("Highlights");
                break;

            case 4:
                console.log("News");
                break;

            default:
                console.log("Invalid choice");
        }

        break;


    // ================= ABOUT US =================
    case 2:
        const aboutUs = Number(prompt(`
######## ABOUT US ########
1. Our Team
2. Our History
3. Mission & Vision
`));

        switch (aboutUs) {
            case 1:
                console.log("Our Team");
                break;

            case 2:
                console.log("Our History");
                break;

            case 3:
                console.log("Mission & Vision");
                break;

            default:
                console.log("Invalid choice");
        }

        break;


    // ================= CONTACT =================
    case 3:
        const contact = Number(prompt(`
######## CONTACT ########
1. Email
2. Phone
3. Location
`));

        switch (contact) {
            case 1:
                console.log("Email");
                break;

            case 2:
                console.log("Phone");
                break;

            case 3:
                console.log("Location");
                break;

            default:
                console.log("Invalid choice");
        }

        break;


    // ================= PRODUCTS =================
    case 4:
        const products = Number(prompt(`
######## PRODUCTS ########
1. New Arrivals
2. Best Sellers
3. Categories
`));

        switch (products) {

            // New Arrivals
            case 1:
                const newArrivals = Number(prompt(`
######## NEW ARRIVALS ########
1. Product A
2. Product B
3. Product C
`));

                switch (newArrivals) {
                    case 1:
                        console.log("Product A");
                        break;

                    case 2:
                        console.log("Product B");
                        break;

                    case 3:
                        console.log("Product C");
                        break;

                    default:
                        console.log("Invalid choice");
                }

                break;


            // Best Sellers
            case 2:
                const bestSellers = Number(prompt(`
######## BEST SELLERS ########
1. Product X
2. Product Y
3. Product Z
`));

                switch (bestSellers) {
                    case 1:
                        console.log("Product X");
                        break;

                    case 2:
                        console.log("Product Y");
                        break;

                    case 3:
                        console.log("Product Z");
                        break;

                    default:
                        console.log("Invalid choice");
                }

                break;


            // Categories
            case 3:
                const categories = Number(prompt(`
######## CATEGORIES ########
1. Electronics
2. Clothing
3. Accessories
`));

                switch (categories) {
                    case 1:
                        console.log("Electronics");
                        break;

                    case 2:
                        console.log("Clothing");
                        break;

                    case 3:
                        console.log("Accessories");
                        break;

                    default:
                        console.log("Invalid choice");
                }

                break;

            default:
                console.log("Invalid choice");
        }

        break;


    // ================= SERVICES =================
    case 5:
        const services = Number(prompt(`
######## SERVICES ########
1. Consulting
2. Support
3. Training
`));

        switch (services) {

            // Consulting
            case 1:
                const consulting = Number(prompt(`
######## CONSULTING ########
1. Business Consulting
2. IT Consulting
3. Financial Consulting
`));

                switch (consulting) {
                    case 1:
                        console.log("Business Consulting");
                        break;

                    case 2:
                        console.log("IT Consulting");
                        break;

                    case 3:
                        console.log("Financial Consulting");
                        break;

                    default:
                        console.log("Invalid choice");
                }

                break;


            // Support
            case 2:
                const support = Number(prompt(`
######## SUPPORT ########
1. Customer Support
2. Technical Support
3. FAQ
`));

                switch (support) {
                    case 1:
                        console.log("Customer Support");
                        break;

                    case 2:
                        console.log("Technical Support");
                        break;

                    case 3:
                        console.log("FAQ");
                        break;

                    default:
                        console.log("Invalid choice");
                }

                break;


            // Training
            case 3:
                const training = Number(prompt(`
######## TRAINING ########
1. Online Courses
2. Workshops
3. Certifications
`));

                switch (training) {
                    case 1:
                        console.log("Online Courses");
                        break;

                    case 2:
                        console.log("Workshops");
                        break;

                    case 3:
                        console.log("Certifications");
                        break;

                    default:
                        console.log("Invalid choice");
                }

                break;

            default:
                console.log("Invalid choice");
        }

        break;


    // ================= INVALID MAIN MENU =================
    default:
        console.log("Invalid menu choice");
}
