const router = require('express').Router();
const path = require('path');

// route for landing page 
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../.././public/page1.html'));
});

// route for page 2
router.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, '../.././public/page2.html'));
});

// route for page 3 
router.get('/page3', (req,res) => {
    res.sendFile(path.join(__dirname, '../.././public/page3.html'));
});

// route for page 4
router.get('/page4', (req, res) => {
    res.render("page4")
});

module.exports = router
