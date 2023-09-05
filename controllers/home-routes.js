const router = require('express').Router();
const Category = require('../models/category');
const SubCategory = require('../models/subCategory');
const Product = require('../models/product');

// Route to render homepage with category names and a randomised associated product image
router.get('/', async (req, res) => {
    try {
        // const category = await Category.findAll({
        //         include: [
        //             {
        //                 model: SubCategory,
        //                 as: 'subcat',
        //             },
        //             {
        //                 model: Product,
        //                 as: 'pdata',
        //                 attributes: [
        //                     [
        //                     sequelize.fn('RAND'), // Generate a random number
        //                     ],
        //                     'product_name',
        //                     'product_image_path',
        //                 ],
        //                 order: sequelize.literal('RAND()'), // Randomize the order of products
        //                 limit: 1, // Limit to 1 random product image per category
        //             },
        //         ],
        //   });

        // const categoryProductImageData = category.map((catItem) =>
        // catItem.get({ plain: true }));

        // console.log(categoryProductImageData);

        res.render('homepage');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// router.get('/', (req, res) => {
//     res.render('homepage');
// });

module.exports = router;    