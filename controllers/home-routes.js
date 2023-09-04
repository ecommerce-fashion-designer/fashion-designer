const router = require('express').Router();
const Category = require('../models/category');
const SubCategory = require('../models/subCategory');
const Product = require('../models/product');

// Route to get all categories and render homepage with category data
// router.get('/', async (req, res) => {
//     try {
//         const categoryTypes = await Category.findAll();
//         const catData = category.map((catItem) =>
//         catItem.get({ plain: true }));

//         res.render('homepage', {layout: 'main'});
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;    