// Import the express module
const express = require('express');
// Create a new router
const router = express.Router();
// Import the controllers
const controller = require('..Barnardos/controllers/barnardosController.js');
const postController = require('..Barnardos/controllers/postController.js');

// Define routes for different paths
// Route for the landing page
router.get(["/","Home","/Homepage"], controller.landing_page);

// Route for the about page
router.get("/about", controller.about_page);
// Route for the contact page
router.get("/contact", controller.contact_page);
// Route for the home page
router.get("/home", controller.home_page);

// Route for the login page
// This route renders the 'login' view when selected
router.get("/login", (req, res) => {
    res.render('login');
});

// Route for the signup page
router.get("/signup", (req, res) => {
    res.render('signup');
});

// handling 404 errors
router.use(function (req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
});

// handling internal server errors
router.use(function (err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
});

// Export the router for use in other files
module.exports = router;
