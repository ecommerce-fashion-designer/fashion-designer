const { Product } = require('../models');

const productData = [
  {
    product_name: 'Double Breasted Beige 2-Piece Suit',
    product_desc:"Tailored V neck notch lapel double breasted beige 2-Piece business suit made from high-quality potrueer fabric. It comes with bottom as trouser",
    price: 14.99,
    product_spec:"Large",
    stock: 14,
    is_stock:true,
    slug:"Double Breasted Beige 2-Piece Suit",
    product_image_path:"https://cdn.pixabay.com/photo/2017/08/28/02/59/suit-2688317_1280.jpg",
    sub_category_id: 1,
    color_id:1
  },
  {
    product_name: 'Ethnic Printed Wedding Nehru Waistcoat',
    product_desc:"Ethnic wear Indian designer white piping work on collar and chest pocket classic Nehru collar waistcoat made from black color printed Imported fabric",
    price: 14.99,
    product_spec:"Large",
    stock: 14,
    is_stock:true,
    slug:"Ethnic Printed Wedding Nehru Waistcoat",
    product_image_path:"https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932_1280.jpg",
    sub_category_id: 2,
    color_id:2
  },
  {
    product_name: 'Stylish Blue Embroidered Gown',
    product_desc:"Jennifer Winget looks more beutiful in this blue satin silk anarkali gown with embroidered floral motifs on the yoke",
    price: 14.99,
    product_spec:"Large",
    stock: 10,
    is_stock:true,
    slug:"Stylish Blue Embroidered Gown",
    product_image_path:"https://media.istockphoto.com/id/1422546700/photo/fashion-model-in-red-evening-dress-beautiful-woman-in-princess-ball-gown-and-curly-hairstyle.jpg?b=1&s=170667a&w=0&k=20&c=jYyJ7Cp8nEDa_KhgZFTjKXRomXsdvx9TGOxa_-YquOo=",
    sub_category_id: 3,
    color_id:3
  },
  {
    product_name: 'Grey And Black Lycra Ready To Wear Saree',
    product_desc:"A horizontal self-striped black and grey pre draped lycra saree embellished with thread, cord embroidery and applique work",
    price: 14.99,
    product_spec:"Large",
    stock: 10,
    is_stock:true,
    slug:"Grey And Black Lycra Ready To Wear Saree",
    product_image_path:"https://i.dummyjson.com/data/products/2/2.jpg",
    sub_category_id: 4,
    color_id:2
  },
  {
    product_name: 'girls stylish Gown',
    product_desc:"Jennifer Winget looks more beutiful in this blue satin silk anarkali gown with embroidered",
    price: 14.99,
    product_spec:"[small,medium]",
    stock: 10,
    is_stock:true,
    slug:"Stylish Blue Embroidered Gown",
    product_image_path:"https://i.dummyjson.com/data/products/2/2.jpg",
    sub_category_id: 5,
    color_id:1
  },
  {
    product_name: 'Grey And Black Frock',
    product_desc:"A horizontal self-striped black and grey Frock",
    price: 24.99,
    product_spec:"Large",
    stock: 10,
    is_stock:true,
    slug:"Grey And Black Lycra Ready To Wear Saree",
    product_image_path:"https://i.dummyjson.com/data/products/2/2.jpg",
    sub_category_id: 5,
    color_id:3
  },
  
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
