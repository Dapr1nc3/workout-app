const router = require('express').Router();

const path = require('path');


// route for landing page 
router.get('/', (req,res) => {
    res.render("page1")
});

// route for page 2
router.get('/page2', (req, res) => {
    res.render("page2")
});

// route for page 3 
router.get('/page3', (req,res) => {
    res.render("page3")
});

// route for page 4
router.get('/page4', (req, res) => {
    res.render("page4")
});

module.exports = router
