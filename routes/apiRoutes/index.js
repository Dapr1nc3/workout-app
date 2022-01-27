// packages all the routes that are in the apiRoutes folder
const router = require('express').Router();

// pulling the files into this index.js 
const userRoutes = require('./userRoutes');

// having the router use /users to access the different route folders
router.use('/users', userRoutes);

module.exports = router; 