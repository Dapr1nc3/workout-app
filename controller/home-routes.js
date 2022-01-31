const router = require('express').Router();
const sequelize = require('../config/connection');


// route for page 4
router.get('/page4', (req, res) => {
    // res.sendFile(path.join(__dirname, '/views/page4.handlebars'));
    res.render ('page4')
});