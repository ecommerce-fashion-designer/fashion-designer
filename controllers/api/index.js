const router = require('express').Router();

const categoryRoutes = require('./category-routes.js');
const subCategoryRoutes = require('./sub-category-routes.js');
const productRoutes = require('./product-routes.js');


router.use('/category', categoryRoutes);
router.use('/sub-category', subCategoryRoutes);
router.use('/products', productRoutes);
module.exports = router;