
const { SubCategory } = require('../models');

const subcategoryData = [
  // {
  //   sub_category_name: 'Shirts',
  //   slug: 'shirts',
  //   category_id: 1,
  // },
  // {
  //   sub_category_name: 'Trousers',
  //   slug: 'trousers',
  //   category_id: 1,
  // },
  // {
  //   sub_category_name: 'Blazer',
  //   slug: 'blazer',
  //   category_id: 1,
  // },

  // {
  //   sub_category_name: 'Blazer',
  //   slug: 'blazer',
  //   category_id: 2,
  // },
  // {
  //   sub_category_name: 'Shirts',
  //   slug: 'shirts',
  //   category_id: 2,
  // },
  // {
  //   sub_category_name: 'Trousers',
  //   slug: 'trousers',
  //   category_id: 2,
  // },
  // {
  //   sub_category_name: 'Dresses',
  //   slug: 'Dresses',
  //   category_id: 3,
  // },
  // {
  //   sub_category_name: 'Frocks',
  //   slug: 'frocks',
  //   category_id: 3,
  // },
  // {
  //   sub_category_name: 'Top',
  //   slug: 'top',
  //   category_id: 3,
  // },
  // {
  //   sub_category_name: 'Pants',
  //   slug: 'pants',
  //   category_id: 3,
  // },


  {
    sub_category_name: 'Blazers',
    slug: 'blazers',
    category_id: 1,
  },
  {
    sub_category_name: 'Jackets',
    slug: 'mens_jackets',
    category_id: 1,
  },
  {
    sub_category_name: 'Pants',
    slug: 'mens_pants',
    category_id: 1,
  },
  {
    sub_category_name: 'Tops',
    slug: 'mens_tops',
    category_id: 1,
  },
  {
    sub_category_name: 'Dresses',
    slug: 'dresses',
    category_id: 2,
  },
  {
    sub_category_name: 'Jackets',
    slug: 'womens_jackets',
    category_id: 2,
  },
  {
    sub_category_name: 'Pants',
    slug: 'womens_pants',
    category_id: 2,
  },
  {
    sub_category_name: 'Skirts',
    slug: 'skirts',
    category_id: 2,
  },
  {
    sub_category_name: 'Tops',
    slug: 'womens_tops',
    category_id: 2,
  },


];

const seedsubcategories = () => SubCategory.bulkCreate(subcategoryData);

module.exports = seedsubcategories;
