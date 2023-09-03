const { Product } = require('../models');
const path = require('path');

const productData = [
  //dresses
  {
    product_name: 'Beach Dress',
    product_desc: "Beach Dress",
    price: 60.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "dress_1",
    product_image_path: "../../images/dresses/dress-1-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  {
    product_name: 'Elegant Red Dress',
    product_desc: "Elegant Red Dress",
    price: 70.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "dress_2",
    product_image_path: "../../images/dresses/dress-2-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  {
    product_name: 'Pink Dress',
    product_desc: "Pink Dress",
    price: 90.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "dress_3",
    product_image_path: "../../images/dresses/dress-3-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  {
    product_name: 'Green Dress',
    product_desc: "Green Dress",
    price: 65.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "dress_4",
    product_image_path: "../../images/dresses/dress-4-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  // {
  //   product_name: 'Modest Red Dress',
  //   product_desc: "Modest Red Dress",
  //   price: 55.00,
  //   product_spec: "Large",
  //   stock: 14,
  //   is_stock: true,
  //   slug: "dress_5",
  //   product_image_path: "../../images/dresses/dress-5-1.jpg",
  //   sub_category_id: 5,
  //   color_id: 1
  // },
  {
    product_name: 'Patterned Dress',
    product_desc: "Patterned Dress",
    price: 55.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "dress_6",
    product_image_path: "../../images/dresses/dress-6-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  {
    product_name: 'Orange Jumpsuit',
    product_desc: "Orange Jumpsuit",
    price: 60.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "dress_7",
    product_image_path: "../../images/dresses/dress-7-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  {
    product_name: 'Modest Longsleeve Dress',
    product_desc: "Modest Longsleeve Dress",
    price: 45.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "dress_8",
    product_image_path: "../../images/dresses/dress-8-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },

  //jackets
  {
    product_name: 'Camo Jacket',
    product_desc: "Camo Jacket",
    price: 80.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "jacket_1",
    product_image_path: "../../images/jackets/jacket-1-2.jpg",
    sub_category_id: 2,
    color_id: 1
  },
  {
    product_name: 'Black Jacket',
    product_desc: "Black Jacket",
    price: 85.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "jacket_2",
    product_image_path: "../../images/jackets/jacket-2-1.jpg",
    sub_category_id: 2,
    color_id: 1
  },
  // {
  //   product_name: 'Denim Jacket',
  //   product_desc: "Denim Jacket",
  //   price: 65.00,
  //   product_spec: "Large",
  //   stock: 14,
  //   is_stock: true,
  //   slug: "jacket_3",
  //   product_image_path: "../../images/jackets/jacket-3-1.jpg",
  //   sub_category_id: 2,
  //   color_id: 1
  // },
  {
    product_name: 'Leopard Print Jacket',
    product_desc: "Leopard Print Jacket",
    price: 95.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "jacket_4",
    product_image_path: "../../images/jackets/jacket-4-1.jpg",
    sub_category_id: 6,
    color_id: 1
  },
  {
    product_name: 'Womens Denim Jacket',
    product_desc: "Womens Denim Jacket",
    price: 70.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "jacket_5",
    product_image_path: "../../images/jackets/jacket-5-1.jpg",
    sub_category_id: 6,
    color_id: 1
  },
  {
    product_name: 'Beige Jacket',
    product_desc: "Beige Jacket",
    price: 80.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "jacket_6",
    product_image_path: "../../images/jackets/jacket-6-1.jpg",
    sub_category_id: 2,
    color_id: 1
  },
  {
    product_name: 'Industrial Jacket',
    product_desc: "Industrial Jacket",
    price: 90.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "jacket_7",
    product_image_path: "../../images/jackets/jacket-7-1.jpg",
    sub_category_id: 2,
    color_id: 1
  },
  {
    product_name: 'Leather Jacket',
    product_desc: "Leather Jacket",
    price: 85.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "jacket_8",
    product_image_path: "../../images/jackets/jacket-8-1.jpg",
    sub_category_id: 2,
    color_id: 1
  },
  {
    product_name: 'Womens Leather Jacket',
    product_desc: "Womens Leather Jacket",
    price: 85.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "jacket_9",
    product_image_path: "../../images/jackets/jacket-9-1.jpg",
    sub_category_id: 6,
    color_id: 1
  },
  {
    product_name: 'Brown Jacket',
    product_desc: "Brown Jacket",
    price: 80.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "jacket_10",
    product_image_path: "../../images/jackets/jacket-10-1.jpg",
    sub_category_id: 2,
    color_id: 1
  },

  //pants
  {
    product_name: 'Brown Checkered Pants',
    product_desc: "Brown Checkered Pants",
    price: 80.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "pants_1",
    product_image_path: "../../images/pants/pants-1-1.jpg",
    sub_category_id: 3,
    color_id: 1
  },
  {
    product_name: 'White Straight Cut Pants',
    product_desc: "White Straight Cut Pants",
    price: 70.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "pants_2",
    product_image_path: "../../images/pants/pants-2-1.jpg",
    sub_category_id: 7,
    color_id: 1
  },
  {
    product_name: 'Checkerboard Pants',
    product_desc: "Checkerboard Pants",
    price: 65.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "pants_3",
    product_image_path: "../../images/pants/pants-3-1.jpg",
    sub_category_id: 7,
    color_id: 1
  },
  {
    product_name: 'White Comfy Pants',
    product_desc: "White Comfy Pants",
    price: 60.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "pants_4",
    product_image_path: "../../images/pants/pants-4-1.jpg",
    sub_category_id: 7,
    color_id: 1
  },
  // {
  //   product_name: 'Ripped Denim Jeans',
  //   product_desc: "Ripped Denim Jeans",
  //   price: 75.00,
  //   product_spec: "Large",
  //   stock: 14,
  //   is_stock: true,
  //   slug: "pants_5",
  //   product_image_path: "../../images/pants/pants-5-1.jpg",
  //   sub_category_id: 3,
  //   color_id: 1
  // },

  //skirts
  {
    product_name: 'Long Green Skirt',
    product_desc: "Long Green Skirt",
    price: 65.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "skirt_1",
    product_image_path: "../../images/skirts/skirt-1-1.jpg",
    sub_category_id: 8,
    color_id: 1
  },
  {
    product_name: 'Gray Pleated Skirt',
    product_desc: "Gray Pleated Skirt",
    price: 60.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "skirt_2",
    product_image_path: "../../images/skirts/skirt-2-1.jpg",
    sub_category_id: 8,
    color_id: 1
  },
  {
    product_name: 'Black/White Striped Skirt',
    product_desc: "Black/White Striped Skirt",
    price: 55.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "skirt_3",
    product_image_path: "../../images/skirts/skirt-3-1.jpg",
    sub_category_id: 8,
    color_id: 1
  },
  {
    product_name: 'Full Length Black Skirt',
    product_desc: "Full Length Black Skirt",
    price: 65.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "skirt_4",
    product_image_path: "../../images/skirts/skirt-4-1.jpg",
    sub_category_id: 8,
    color_id: 1
  },
  {
    product_name: 'Tartan Skirt',
    product_desc: "Tartan Skirt",
    price: 70.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "skirt_5",
    product_image_path: "../../images/skirts/skirt-5-1.jpg",
    sub_category_id: 8,
    color_id: 1
  },

  //tops
  {
    product_name: 'Blue Button Shirt',
    product_desc: "Blue Button Shirt",
    price: 45.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "top_1",
    product_image_path: "../../images/tops/top-1-1.jpg",
    sub_category_id: 9,
    color_id: 1
  },
  {
    product_name: 'White Longsleeve Shirt',
    product_desc: "White Longsleeve Shirt",
    price: 45.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "top_2",
    product_image_path: "../../images/tops/top-2-1.jpg",
    sub_category_id: 9,
    color_id: 1
  },
  {
    product_name: 'Longsleeve Black Turtleneck',
    product_desc: "Longsleeve Black Turtleneck",
    price: 55.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "top_3",
    product_image_path: "../../images/tops/top-3-1.jpg",
    sub_category_id: 9,
    color_id: 1
  },
  {
    product_name: 'Green T Shirt',
    product_desc: "Green T Shirt",
    price: 40.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "top_4",
    product_image_path: "../../images/tops/top-4-2.jpg",
    sub_category_id: 4,
    color_id: 1
  },
  {
    product_name: 'Casual White Button Shirt',
    product_desc: "Casual White Button Shirt",
    price: 40.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "top_5",
    product_image_path: "../../images/tops/top-5-1.jpg",
    sub_category_id: 4,
    color_id: 1
  },
  {
    product_name: 'Yellow Tie Up Shirt',
    product_desc: "Yellow Tie Up Shirt",
    price: 45.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "top_6",
    product_image_path: "../../images/tops/top-6-1.jpg",
    sub_category_id: 9,
    color_id: 1
  },
  {
    product_name: 'Loose Fit Pastel Shirt',
    product_desc: "Loose Fit Pastel Shirt",
    price: 50.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "top_7",
    product_image_path: "../../images/tops/top-7-1.jpg",
    sub_category_id: 9,
    color_id: 1
  },
  {
    product_name: 'Knitted Turtleneck',
    product_desc: "Knitted Turtleneck",
    price: 60.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "top_8",
    product_image_path: "../../images/tops/top-8-1.jpg",
    sub_category_id: 9,
    color_id: 1
  },
  {
    product_name: 'Smart Longsleeve',
    product_desc: "Smart Longsleeve",
    price: 50.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "top_9",
    product_image_path: "../../images/tops/top-9-1.jpg",
    sub_category_id: 4,
    color_id: 1
  },
  {
    product_name: 'Smart White Longsleeve',
    product_desc: "Smart White Longsleeve",
    price: 55.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "top_10",
    product_image_path: "../../images/tops/top-10-1.jpg",
    sub_category_id: 4,
    color_id: 1
  },
  {
    product_name: 'Smart Blue Longsleeve',
    product_desc: "Smart Blue Longsleeve",
    price: 45.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "top_11",
    product_image_path: "../../images/tops/top-11-1.jpg",
    sub_category_id: 4,
    color_id: 1
  },

  //blazers
  {
    product_name: 'Navy Blazer',
    product_desc: "Navy Blazer",
    price: 70.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "blazer_1",
    product_image_path: "../../images/blazers/blazer-1-1.jpg",
    sub_category_id: 1,
    color_id: 1
  },
  {
    product_name: 'Navy Blazer with Cufflinks',
    product_desc: "Navy Blazer with Cufflinks",
    price: 80.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "blazer_2",
    product_image_path: "../../images/blazers/blazer-2-1.jpg",
    sub_category_id: 1,
    color_id: 1
  },
  {
    product_name: 'Straight Gray Blazer',
    product_desc: "Straight Gray Blazer",
    price: 75.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "blazer_3",
    product_image_path: "../../images/blazers/blazer-3-1.jpg",
    sub_category_id: 1,
    color_id: 1
  },
  {
    product_name: 'Smart Black Blazer',
    product_desc: "Smart Black Blazer",
    price: 90.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "blazer_4",
    product_image_path: "../../images/blazers/blazer-4-1.jpg",
    sub_category_id: 1,
    color_id: 1
  },
  {
    product_name: 'Gray Blazer with Buttons',
    product_desc: "Gray Blazer with Buttons",
    price: 65.00,
    product_spec: "Large",
    stock: 14,
    is_stock: true,
    slug: "blazer_5",
    product_image_path: "../../images/blazers/blazer-5-1.jpg",
    sub_category_id: 1,
    color_id: 1
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
