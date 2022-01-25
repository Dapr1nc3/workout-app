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
    res.sendFile(path.join(__dirname, '../.././public/page4.html'));
});

<<<<<<< HEAD
module.exports = router
=======
module.exports = router
 
>>>>>>> 9f7a73cf3d8e318e9d3a720efb27fd79d545ee60
