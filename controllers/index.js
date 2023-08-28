const router = require('express').Router();
//backend
const apiRoutes = require('./api');

router.use('/api', apiRoutes);



//frontend call
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);




module.exports = router;
