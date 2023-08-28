 const { ProductGallery } = require('../models');
// import PImage from '../models/productImage';
const productImageData = [
  {
    product_image:"mens",
    image_path:"https://i.dummyjson.com/data/products/2/2.jpg",
    product_id:1
   
  },
  {
    product_image:"women",
   product_image_path:"https://i.dummyjson.com/data/products/2/2.jpg",
    product_id:2
   
  },
 
];

const productImageseedcategories = () => ProductGallery.bulkCreate(productImageData);

module.exports = productImageseedcategories;
