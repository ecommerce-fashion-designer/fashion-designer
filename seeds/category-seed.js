const { Category } = require('../models');


const categoryData = [
   {
      category_name: 'Men',
      slug: 'men',
   },
   {
      category_name: 'Women',
      slug: 'women'
   },
   //   {
   //      category_name: 'Kids',
   //      slug:'kids',
   //   },

];

const seedMCategories = () => Category.bulkCreate(categoryData);

module.exports = seedMCategories;
