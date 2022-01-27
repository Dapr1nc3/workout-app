// packages all the routes that are found in the index.js file for both api and html folder 
const router = require('express').Router();

// pulling the files into this index.js 
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

// having the router use /api and / to access the different route folders
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

// we have requested an incorrect resource aka wildcard route
router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;