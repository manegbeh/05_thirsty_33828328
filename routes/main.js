    // Create a new router
    const express = require("express");
    const router = express.Router();

    // Define our data
    var shopData = {
    shopName: "The Thirsty Student",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    locations: [
        {
        name: "Camden",
        manager: "Alice Johnson",
        address: "12 High Street, Camden, London NW1 7JE"
        },
        {
        name: "Shoreditch",
        manager: "Mark Thompson",
        address: "85 Brick Lane, Shoreditch, London E1 6QL"
        },
        {
        name: "Greenwich",
        manager: "Sarah Ahmed",
        address: "45 Market Street, Greenwich, London SE10 9HZ"
        }
    ]
    };

    // Handle the main routes
    router.get('/',function(req,res){
        res.render('index.ejs', shopData)
    });

    router.get("/about", (req, res) => {
        res.render("about.ejs", shopData);
    }); 

    router.get("/search", (req, res) => {
        res.render("search.ejs", shopData);
    }); 

    router.get('/search_result', function (req, res) {
        // TODO: search in the database
        res.send("You searched for " + req.query.search_text + " in " + req.query.category);
    });

    router.get("/register", (req,res) => {
        res.render("register.ejs",  shopData); 
    }); 
    
    router.post("/registered", (req,res) => { 
    res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered! We will send an email to you at'+ req.body.email);   
    }); 

    router.get("/survey", (req, res) => {
    res.render("survey.ejs", shopData);
    });

    router.post("/survey_submitted", (req, res) => {
    const { first, last, email, age, student } = req.body;

    // categories may come as a single string or an array
    let categories = req.body.categories;
    if (!categories) {
        categories = [];
    } else if (!Array.isArray(categories)) {
        categories = [categories];
    }

    res.render("survey_results.ejs", {
        shopName: shopData.shopName,
        first,
        last,
        email,
        age,
        categories,                  // pass the array
    });
    });

    // Export the router object so index.js can access it
    module.exports = router;
