
const { SubCategory } = require('../models');

const subcategoryData = [
  {
    sub_category_name: 'PartWear Suits',
    slug:'PartWear Suits',
    main_category_id: 1,
  },
  {
    sub_category_name: 'Nehru jacket',
    slug: 'Nehru jacket',
    main_category_id: 1,
  },
   {
    sub_category_name: 'Gowns',
    slug: 'Gowns',
    main_category_id: 2,
  },
  {
    sub_category_name: 'Dresses',
    slug: 'Dresses',
    main_category_id: 2,
  },
  {
    sub_category_name: 'Frocks',
    slug: 'Frocks',
    main_category_id: 3,
  },
  {
    sub_category_name: 'Dresses',
    slug:'Dresses',
    main_category_id: 3,
  },
];

const seedsubcategories = () => SubCategory.bulkCreate(subcategoryData);

module.exports = seedsubcategories;
