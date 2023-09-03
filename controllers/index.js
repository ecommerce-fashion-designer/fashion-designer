const router = require('express').Router();

//backend
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

//frontend call
const homeRoutes = require('./home-routes');
router.use('/', homeRoutes);

//product page
const productRoutes = require('./product-routes');
router.use('/product', productRoutes);

//category page
const categoryRoutes = require('./category-routes');
router.use('/category', categoryRoutes);

//cart page
const cartRoutes = require('./cart-routes');
router.use('/cart', cartRoutes);

//login page
const loginRoutes = require('./login-routes');
router.use('/login', loginRoutes);


module.exports = router;
