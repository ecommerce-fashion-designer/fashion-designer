const router = require('express').Router();
//backend
const apiRoutes = require('./api');

//frontend data
const homeRoutes = require('./home-routes');



router.use('/', homeRoutes);

router.use('/api', apiRoutes);


module.exports = router;
