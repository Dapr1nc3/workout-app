// packages all the routes that are in the apiRoutes folder
const router = require('express').Router();

// pulling the files into this index.js 
const userRoutes = require('./userRoutes');
const measurementsRoutes = require('./measurementsRoutes');

// having the router use /users to access the different route folders
router.use('/users', userRoutes);
router.use('/users/measurements', measurementsRoutes);

module.exports = router; 