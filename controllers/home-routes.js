const router = require('express').Router();
const Category = require('../models/category');
const SubCategory = require('../models/subCategory');
const Product = require('../models/product');
const Color = require('../models/color');

// route to get all categories
// header
router.get('/', async (req, res) => {


    const category = await Category.findAll({
      include: [
        {
          model: SubCategory,
          attributes: ['sub_category_name', 'slug','category_id'],
        },
      ],
    });

    const catData = category.map((catItem) =>
             catItem.get({ plain: true })
    );



  const productData= await Product.findAll().catch((err) => { 
    res.json(err);
  });
    const productList = productData.map((item) => item.get({ plain: true }));
console.log(catData)
console.log(productList)

  res.render('homepage', {
    productList,
    catData,
  
  });

   
});


//left side start here

// router.get('/cat', async (req, res) => {

//   try {
//     const products = await SubCategory.findAll({
//       include: [
//         {
//           model: Product,
//           attributes: ['product_name','price', 'slug','product_image_path','sub_category_id'],
//         },
//       ],
//     });

//     const proData = products.map((proItem) =>
//              proItem.get({ plain: true })
//     );
// console.log(proData)
//     res.render('homepage', {
//       proData,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }




   
// });
module.exports = router;
