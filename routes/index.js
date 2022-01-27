const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

// we have requested an incorrect resource aka wildcard route
router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;