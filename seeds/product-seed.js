const { Product } = require('../models');
const path = require('path');

const productData = [
  //dresses
  {
    product_name: 'Beach Bliss Sundress',
    product_desc: "Introducing the Beach Bliss Sundress, a chic and comfortable choice for your beach adventures. This sundress is designed for sunny sophistication, offering a relaxed fit and breathable fabric for your seaside comfort. From strolling along the shoreline to seaside cocktails, it transitions effortlessly from day to night. Slip into your favorite sandals and a sun hat, and you're ready to capture beachside moments with confidence. Order now and step into beach bliss effortlessly.",
    price: 60.00,
    product_spec: "Large",
    stock: 1,
    is_stock: true,
    slug: "dress_1",
    product_image_path: "../../images/dresses/dress-1-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  {
    product_name: 'Elegant Red Dress',
    product_desc: "Indulge in the allure of our Red Elegance Evening Dress, a chic and comfortable choice for any occasion. This dress, in a rich red hue, combines timeless style with easy glamour. With its flowing silhouette and versatile charm, it's the perfect choice for making a confident entrance wherever you go. Pair it with your favorite accessories and capture hearts effortlessly. Order now and embrace elegance with ease.",
    price: 70.00,
    product_spec: "Large",
    stock: 4,
    is_stock: true,
    slug: "dress_2",
    product_image_path: "../../images/dresses/dress-2-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  {
    product_name: 'Classy Pink Dress',
    product_desc: "Introducing the Classy Pink Dress, a timeless and elegant choice for any special occasion. This dress exudes sophistication with its graceful design and soft pink hue. Its flattering silhouette ensures you feel confident and comfortable throughout the event. Versatile and refined, it's perfect for a variety of formal gatherings. Minimal accessories are all you need to complete the look, letting the dress's elegance shine through. Make a lasting impression in the Classy Pink Dress. Order now and step into timeless style with grace.",
    price: 90.00,
    product_spec: "Large",
    stock: 3,
    is_stock: true,
    slug: "dress_3",
    product_image_path: "../../images/dresses/dress-3-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  {
    product_name: 'Industrial Green Dress',
    product_desc: "Introducing the Industrial Green Dress, a unique and captivating addition to your wardrobe. This dress combines an industrial-inspired design with a fresh green hue, creating a striking and modern look. Its bold silhouette ensures you stand out with confidence. Ideal for fashion-forward events, it's a statement piece that speaks for itself. Pair it with edgy accessories to complete the look and make a lasting impression. Elevate your style with the Industrial Green Dress. Order now and embrace the avant-garde effortlessly.",
    price: 65.00,
    product_spec: "Large",
    stock: 6,
    is_stock: true,
    slug: "dress_4",
    product_image_path: "../../images/dresses/dress-4-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  {
    product_name: 'Modest Red Dress',
    product_desc: "Introducing the Modest Red Dress, a graceful and understated choice for any occasion. This dress embodies elegance with its modest design and rich red color. Its timeless silhouette ensures comfort and confidence, no matter the event. Perfect for those who appreciate classic style, it's versatile for various gatherings. Add subtle accessories to complete the look and let the dress's modest charm shine through. Embrace the beauty of simplicity with the Modest Red Dress. Order now and step into classic elegance with ease.",
    price: 55.00,
    product_spec: "Large",
    stock: 8,
    is_stock: true,
    slug: "dress_5",
    product_image_path: "../../images/dresses/dress-5-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  {
    product_name: 'Short Patterned Dress',
    product_desc: "Introducing the Short Patterned Dress, a playful and stylish addition to your wardrobe. This dress features an eye-catching pattern and a flattering shorter length, making it perfect for fun and casual outings. Its breezy silhouette ensures comfort and a touch of flair. Ideal for a day out with friends or a summer soirée, it's a statement piece that embodies relaxed chic. Pair it with your favorite sandals or sneakers for a complete look. Elevate your casual style with the Short Patterned Dress. Order now and step into playful elegance effortlessly.",
    price: 55.00,
    product_spec: "Large",
    stock: 3,
    is_stock: true,
    slug: "dress_6",
    product_image_path: "../../images/dresses/dress-6-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  {
    product_name: 'Orange Jumpsuit',
    product_desc: "Introducing the Casual Orange Jumpsuit, a laid-back and vibrant choice for your everyday adventures. This jumpsuit combines comfort and style with its relaxed fit and cheerful orange hue. Its effortless design ensures ease of wear for any casual occasion. Ideal for running errands, meeting friends, or simply enjoying a day out, it's a versatile piece that radiates easygoing charm. Slip into your favorite sneakers, add some accessories, and you're ready for a day of casual chic. Elevate your everyday look with the Casual Orange Jumpsuit. Order now and embrace comfort and style in one effortless piece.",
    price: 60.00,
    product_spec: "Large",
    stock: 9,
    is_stock: true,
    slug: "dress_7",
    product_image_path: "../../images/dresses/dress-7-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },
  {
    product_name: 'Modest Longsleeve Dress',
    product_desc: "Introducing the Modest Long Sleeve Dress, a timeless and sophisticated addition to your wardrobe. This dress combines modesty with a long sleeve design, creating an elegant and versatile look. Its classic silhouette ensures comfort and confidence for various occasions. Perfect for those who appreciate understated style, it pairs beautifully with subtle accessories. Whether for a formal event or a special gathering, this dress embodies grace and modesty effortlessly. Elevate your style with the Modest Long Sleeve Dress. Order now and step into classic elegance with ease.",
    price: 45.00,
    product_spec: "Large",
    stock: 2,
    is_stock: true,
    slug: "dress_8",
    product_image_path: "../../images/dresses/dress-8-1.jpg",
    sub_category_id: 5,
    color_id: 1
  },

  //jackets
  {
    product_name: 'Camo Jacket',
    product_desc: "Introducing the Camo Jacket, a rugged and versatile addition to your outerwear collection. This jacket features a camouflage pattern, adding a touch of adventure to your look. With its durable design, it's ideal for outdoor excursions and cool-weather styling. Whether you're exploring the wilderness or simply adding an edge to your urban ensemble, this camo jacket delivers both style and functionality. Pair it with jeans and boots for a complete rugged look. Elevate your outdoor or casual style with the Camo Jacket. Order now and embrace the spirit of adventure effortlessly.",
    price: 80.00,
    product_spec: "Large",
    stock: 7,
    is_stock: true,
    slug: "jacket_1",
    product_image_path: "../../images/jackets/jacket-1-2.jpg",
    sub_category_id: 2,
    color_id: 1
  },
  {
    product_name: 'Black Stylish Fleece Jacket',
    product_desc: "Introducing the Black Stylish Fleece Jacket, a sleek and cozy addition to your wardrobe. This jacket boasts a stylish black design, offering both warmth and fashion-forward appeal. With its fleece lining, it's perfect for keeping you snug on cooler days. Whether you're strolling in the city or heading to an evening event, this jacket combines comfort and style effortlessly. Pair it with your favorite jeans and sneakers for a complete look that exudes sophistication. Elevate your cool-weather style with the Black Stylish Fleece Jacket. Order now and stay both warm and fashionable with ease.",
    price: 85.00,
    product_spec: "Large",
    stock: 9,
    is_stock: true,
    slug: "jacket_2",
    product_image_path: "../../images/jackets/jacket-2-1.jpg",
    sub_category_id: 2,
    color_id: 1
  },
  {
    product_name: 'Leopard Print Coat',
    product_desc: "Introducing the Fluffy Leopard Print Coat, a bold and luxurious addition to your outerwear collection. This coat showcases a stunning leopard print design, combining wild style with warmth and comfort. Its plush and fluffy texture ensures you stay cozy while making a fashion statement. Whether you're heading to a special event or looking to elevate your everyday ensemble, this coat effortlessly exudes confidence and sophistication. Pair it with your favorite jeans and high heels for a complete look that turns heads. Elevate your style with the Fluffy Leopard Print Coat. Order now and make a striking fashion statement with ease.",
    price: 95.00,
    product_spec: "Large",
    stock: 1,
    is_stock: true,
    slug: "jacket_4",
    product_image_path: "../../images/jackets/jacket-4-1.jpg",
    sub_category_id: 6,
    color_id: 1
  },
  {
    product_name: 'Womens Denim Jacket',
    product_desc: "Introducing the Women's Denim Jacket, a timeless and versatile addition to your wardrobe. This jacket is a classic in the world of fashion, offering both style and practicality. With its durable denim fabric, it's perfect for various casual occasions. Whether you're running errands, meeting friends, or looking to add a layer of cool to your outfit, this denim jacket effortlessly complements your look. Pair it with a sundress, jeans, or just about anything for a complete ensemble that radiates casual chic. Elevate your everyday style with the Women's Denim Jacket. Order now and embrace classic comfort and flair with ease.",
    price: 70.00,
    product_spec: "Large",
    stock: 6,
    is_stock: true,
    slug: "jacket_5",
    product_image_path: "../../images/jackets/jacket-5-1.jpg",
    sub_category_id: 6,
    color_id: 1
  },
  {
    product_name: 'Beige Jacket',
    product_desc: "Introducing the Casual Beige Suit Jacket, a versatile and relaxed addition to your wardrobe. This jacket combines the classic sophistication of a suit with the comfort of casual wear. With its beige hue and easygoing design, it's perfect for various occasions, from semi-formal gatherings to dressier casual events. Pair it with jeans or chinos and a crisp shirt for a complete ensemble that effortlessly blends style and comfort. Elevate your casual yet polished style with the Casual Beige Suit Jacket. Order now and enjoy the perfect balance of laid-back elegance with ease.",
    price: 80.00,
    product_spec: "Large",
    stock: 5,
    is_stock: true,
    slug: "jacket_6",
    product_image_path: "../../images/jackets/jacket-6-1.jpg",
    sub_category_id: 2,
    color_id: 1
  },
  {
    product_name: 'Industrial Street Jacket',
    product_desc: "Introducing the Industrial Street Style Jacket, a bold and edgy statement piece for your urban adventures. This jacket embodies the spirit of the streets with its industrial-inspired design and street-smart attitude. Its rugged detailing and unique style make it perfect for street fashion enthusiasts. Whether you're exploring the city or expressing your individuality, this jacket effortlessly combines style and attitude. Pair it with distressed jeans and high-top sneakers for a complete urban ensemble that stands out. Elevate your street style with the Industrial Street Style Jacket. Order now and make a fearless fashion statement with ease.",
    price: 90.00,
    product_spec: "Large",
    stock: 5,
    is_stock: true,
    slug: "jacket_7",
    product_image_path: "../../images/jackets/jacket-7-1.jpg",
    sub_category_id: 2,
    color_id: 1
  },
  {
    product_name: 'Mens Leather Jacket',
    product_desc: "Introducing the Men's Leather Jacket, a timeless and rugged essential for your wardrobe. Crafted with precision, this jacket is the epitome of classic style and durability. Whether you're heading out for a casual night or adding an edge to your everyday look, this leather jacket effortlessly combines fashion and functionality. Pair it with jeans and boots for a complete ensemble that exudes confidence and character. Elevate your style with the Men's Leather Jacket. Order now and embrace the enduring appeal of leather with ease.",
    price: 85.00,
    product_spec: "Large",
    stock: 6,
    is_stock: true,
    slug: "jacket_8",
    product_image_path: "../../images/jackets/jacket-8-1.jpg",
    sub_category_id: 2,
    color_id: 1
  },
  {
    product_name: 'Womens Leather Jacket',
    product_desc: "Introducing the Women's Leather Jacket, a symbol of timeless elegance and versatile style. Crafted with meticulous attention to detail, this jacket effortlessly combines fashion and sophistication. Whether you're stepping out for a night on the town or looking to elevate your everyday ensemble, this leather jacket is the perfect choice. Pair it with jeans and ankle boots for a complete look that exudes confidence and charm. Elevate your style with the Women's Leather Jacket. Order now and embrace the enduring allure of leather with ease.",
    price: 85.00,
    product_spec: "Large",
    stock: 7,
    is_stock: true,
    slug: "jacket_9",
    product_image_path: "../../images/jackets/jacket-9-1.jpg",
    sub_category_id: 6,
    color_id: 1
  },
  {
    product_name: 'Brown Trench Coat',
    product_desc: "Introducing the Men's Brown Mid-Length Trench Coat, a classic and refined addition to your outerwear collection. This trenchcoat exudes timeless style with its rich brown hue and sophisticated design. Whether you're heading to the office or attending a formal event, it effortlessly combines fashion and functionality. Pair it with a suit or dress it down with casual attire for a complete ensemble that radiates confidence and elegance. Elevate your style with the Men's Brown Mid-Length Trenchcoat. Order now and make a lasting impression with this enduring classic.",
    price: 80.00,
    product_spec: "Large",
    stock: 3,
    is_stock: true,
    slug: "jacket_10",
    product_image_path: "../../images/jackets/jacket-10-1.jpg",
    sub_category_id: 2,
    color_id: 1
  },

  //pants
  {
    product_name: 'Brown Checkered Pants',
    product_desc: "Introducing Brown Checkered Pants, a stylish and versatile addition to your wardrobe. These pants feature a classic checkered pattern in warm brown tones, offering both sophistication and fashion-forward appeal. With their tailored fit, they are perfect for various occasions, from business meetings to casual outings. Pair them with a crisp white shirt and loafers for a polished look, or dress them down with a sweater and sneakers for a relaxed ensemble. Elevate your style with Brown Checkered Pants. Order now and make a bold fashion statement with ease.",
    price: 80.00,
    product_spec: "Large",
    stock: 8,
    is_stock: true,
    slug: "pants_1",
    product_image_path: "../../images/pants/pants-1-1.jpg",
    sub_category_id: 3,
    color_id: 1
  },
  {
    product_name: 'White Straight Cut Pants',
    product_desc: "Introducing White Straight Cut Pants, a clean and versatile addition to your wardrobe. These pants feature a classic straight cut design in a crisp white hue, offering both sophistication and endless styling options. With their timeless silhouette, they are perfect for various occasions, from casual outings to formal gatherings. Pair them with a colorful blouse and heels for a chic look, or opt for a relaxed vibe with a tucked-in t-shirt and sneakers. Elevate your style with White Straight Cut Pants. Order now and embrace the timeless elegance of this wardrobe essential.",
    price: 70.00,
    product_spec: "Large",
    stock: 1,
    is_stock: true,
    slug: "pants_2",
    product_image_path: "../../images/pants/pants-2-1.jpg",
    sub_category_id: 7,
    color_id: 1
  },
  {
    product_name: 'Checkerboard Pants',
    product_desc: "Introducing Black and White Checkerboard Pants, a bold and eye-catching addition to your fashion repertoire. These pants feature a striking checkerboard pattern that effortlessly combines classic black and white, making a fashion-forward statement. With their unique design, they are perfect for creating standout looks for various occasions. Pair them with a solid-colored top and bold accessories for a daring style, or tone them down with a simple tee for a casual yet edgy ensemble. Elevate your fashion game with Black and White Checkerboard Pants. Order now and make a memorable statement with ease.",
    price: 65.00,
    product_spec: "Large",
    stock: 4,
    is_stock: true,
    slug: "pants_3",
    product_image_path: "../../images/pants/pants-3-1.jpg",
    sub_category_id: 7,
    color_id: 1
  },
  {
    product_name: 'White Comfy Pants',
    product_desc: "Introducing White Comfy Loose-Fitting Pants, the epitome of relaxed elegance for your everyday comfort. These pants offer a loose and cozy fit, perfect for leisurely days and casual outings. In classic white, they exude an effortless style that complements your laid-back vibes. Pair them with a comfy tee or a loose blouse for an easygoing yet chic look. Elevate your comfort with White Comfy Loose-Fitting Pants. Order now and experience the perfect blend of comfort and style for your everyday adventures.",
    price: 60.00,
    product_spec: "Large",
    stock: 4,
    is_stock: true,
    slug: "pants_4",
    product_image_path: "../../images/pants/pants-4-1.jpg",
    sub_category_id: 7,
    color_id: 1
  },

  //skirts
  {
    product_name: 'Long Green Skirt',
    product_desc: "Introducing the Long Green Skirt, a graceful and versatile addition to your wardrobe. This skirt features a flowing, ankle-length design in a lovely shade of green, offering both elegance and comfort. With its timeless silhouette, it's perfect for various occasions, from casual outings to special gatherings. Pair it with a tucked-in blouse and sandals for a fresh and relaxed look, or dress it up with heels and a statement necklace for a more polished ensemble. Elevate your style with the Long Green Skirt. Order now and embrace the effortless charm of this wardrobe essential.",
    price: 65.00,
    product_spec: "Large",
    stock: 8,
    is_stock: true,
    slug: "skirt_1",
    product_image_path: "../../images/skirts/skirt-1-1.jpg",
    sub_category_id: 8,
    color_id: 1
  },
  {
    product_name: 'Gray Pleated Skirt',
    product_desc: "Introducing the Gray Pleated Skirt, a chic and versatile addition to your closet. This skirt showcases a classic pleated design in a sophisticated shade of gray, offering both style and versatility. Its timeless silhouette makes it suitable for various occasions, from office meetings to casual outings. Pair it with a tucked-in blouse and pumps for a polished look, or style it with a graphic tee and sneakers for a more relaxed ensemble. Elevate your style with the Gray Pleated Skirt. Order now and embrace the enduring elegance of this wardrobe staple.",
    price: 60.00,
    product_spec: "Large",
    stock: 3,
    is_stock: true,
    slug: "skirt_2",
    product_image_path: "../../images/skirts/skirt-2-1.jpg",
    sub_category_id: 8,
    color_id: 1
  },
  {
    product_name: 'Black/White Striped Skirt',
    product_desc: "Introducing the Black and White Striped Skirt, a timeless and striking addition to your fashion collection. This skirt boasts a bold striped pattern in classic black and white, making a statement with its eye-catching design. With its versatile style, it's perfect for various occasions, from casual outings to semi-formal events. Pair it with a tucked-in blouse and heels for a chic look, or dress it down with a simple tee and sneakers for a trendy ensemble. Elevate your fashion game with the Black and White Striped Skirt. Order now and make a memorable statement with ease.",
    price: 55.00,
    product_spec: "Large",
    stock: 6,
    is_stock: true,
    slug: "skirt_3",
    product_image_path: "../../images/skirts/skirt-3-1.jpg",
    sub_category_id: 8,
    color_id: 1
  },
  {
    product_name: 'Full Length Black Skirt',
    product_desc: "Introducing the Full-Length Black Skirt, a timeless and elegant addition to your wardrobe. This skirt features a graceful full-length design in classic black, offering both sophistication and versatility. With its flowing silhouette, it's perfect for a range of occasions, from formal events to everyday chic. Pair it with a tailored blouse and heels for a polished look, or embrace a more relaxed vibe with a cozy sweater and ankle boots. Elevate your style with the Full-Length Black Skirt. Order now and embrace the enduring allure of this wardrobe staple.",
    price: 65.00,
    product_spec: "Large",
    stock: 7,
    is_stock: true,
    slug: "skirt_4",
    product_image_path: "../../images/skirts/skirt-4-1.jpg",
    sub_category_id: 8,
    color_id: 1
  },
  {
    product_name: 'Tartan Skirt',
    product_desc: "Introducing the Tartan Short Skirt, a stylish and playful addition to your fashion repertoire. This skirt features a classic tartan pattern, combining traditional charm with a contemporary twist. With its shorter length, it's perfect for making a statement and showing off your fashion-forward style. Pair it with a cozy sweater and ankle boots for a chic fall look, or dress it up with a tucked-in blouse and heels for a fun evening ensemble. Elevate your fashion game with the Tartan Short Skirt. Order now and make a standout statement with ease.",
    price: 70.00,
    product_spec: "Large",
    stock: 7,
    is_stock: true,
    slug: "skirt_5",
    product_image_path: "../../images/skirts/skirt-5-1.jpg",
    sub_category_id: 8,
    color_id: 1
  },

  //tops
  {
    product_name: 'Blue Button Shirt',
    product_desc: "Introducing the Blue Button-Up Shirt, a timeless and versatile essential for your wardrobe. This shirt features a classic design in a serene shade of blue, offering both sophistication and comfort. With its versatile style, it's perfect for various occasions, from business meetings to casual outings. Pair it with tailored trousers and dress shoes for a polished look, or go for a more relaxed vibe with jeans and sneakers. Elevate your style with the Blue Button-Up Shirt. Order now and experience the enduring appeal of this wardrobe staple.",
    price: 45.00,
    product_spec: "Large",
    stock: 6,
    is_stock: true,
    slug: "top_1",
    product_image_path: "../../images/tops/top-1-1.jpg",
    sub_category_id: 9,
    color_id: 1
  },
  {
    product_name: 'White Longsleeve Shirt',
    product_desc: "Introducing the White Long Sleeve Shirt, a clean and classic addition to your wardrobe. This shirt features a timeless design in crisp white, offering both versatility and sophistication. With its long sleeves, it's perfect for a range of occasions, from office meetings to casual outings. Pair it with tailored trousers and loafers for a polished look, or dress it down with jeans and sneakers for a relaxed ensemble. Elevate your style with the White Long Sleeve Shirt. Order now and embrace the enduring simplicity and elegance of this wardrobe staple.",
    price: 45.00,
    product_spec: "Large",
    stock: 5,
    is_stock: true,
    slug: "top_2",
    product_image_path: "../../images/tops/top-2-1.jpg",
    sub_category_id: 9,
    color_id: 1
  },
  {
    product_name: 'Longsleeve Black Turtleneck',
    product_desc: "Introducing the Long Sleeve Black Turtleneck, a sleek and versatile addition to your wardrobe. This turtleneck boasts a classic design in a timeless shade of black, offering both sophistication and warmth. With its long sleeves and elegant neckline, it's perfect for various occasions, from business meetings to cozy evenings. Pair it with tailored trousers and heels for a chic look, or go for a more casual vibe with jeans and ankle boots. Elevate your style with the Long Sleeve Black Turtleneck. Order now and embrace the enduring elegance and comfort of this wardrobe staple.",
    price: 55.00,
    product_spec: "Large",
    stock: 4,
    is_stock: true,
    slug: "top_3",
    product_image_path: "../../images/tops/top-3-1.jpg",
    sub_category_id: 9,
    color_id: 1
  },
  {
    product_name: 'Green T Shirt',
    product_desc: "Introducing the Simple Green T-Shirt, a basic and versatile addition to your casual wardrobe. This shirt features a clean and uncomplicated design in a fresh shade of green, offering both simplicity and comfort. With its classic style, it's perfect for everyday wear and easygoing outings. Pair it with jeans and sneakers for a relaxed look, or layer it under a jacket for added style. Elevate your casual style with the Simple Green T-Shirt. Order now and embrace the effortless charm of this wardrobe essential.",
    price: 40.00,
    product_spec: "Large",
    stock: 2,
    is_stock: true,
    slug: "top_4",
    product_image_path: "../../images/tops/top-4-2.jpg",
    sub_category_id: 4,
    color_id: 1
  },
  {
    product_name: 'Casual White Button Shirt',
    product_desc: "Introducing the Casual White Button Shirt, a timeless and versatile addition to your wardrobe. This shirt features a classic design in crisp white, offering both sophistication and comfort. With its easygoing style, it's perfect for various occasions, from casual outings to dressier events. Pair it with jeans and sneakers for a laid-back look, or dress it up with trousers and loafers for a polished ensemble. Elevate your casual style with the Casual White Button Shirt. Order now and embrace the enduring appeal of this wardrobe staple.",
    price: 40.00,
    product_spec: "Large",
    stock: 6,
    is_stock: true,
    slug: "top_5",
    product_image_path: "../../images/tops/top-5-1.jpg",
    sub_category_id: 4,
    color_id: 1
  },
  {
    product_name: 'Yellow Tie Up Shirt',
    product_desc: "Introducing the Yellow Tie-Up Shirt, a vibrant and playful addition to your fashion collection. This shirt features a cheerful yellow hue and a trendy tie-up design, making it a statement piece for your wardrobe. With its versatile style, it's perfect for various occasions, from casual gatherings to sunny days out. Pair it with high-waisted jeans and sandals for a chic look, or embrace a relaxed vibe with shorts and sneakers. Elevate your fashion game with the Yellow Tie-Up Shirt. Order now and make a memorable statement with ease.",
    price: 45.00,
    product_spec: "Large",
    stock: 8,
    is_stock: true,
    slug: "top_6",
    product_image_path: "../../images/tops/top-6-1.jpg",
    sub_category_id: 9,
    color_id: 1
  },
  {
    product_name: 'Loose Fit Pastel Shirt',
    product_desc: "Introducing the Loose Fit Pastel Shirt, a relaxed and charming addition to your casual wardrobe. This shirt features a loose and comfortable fit in a soothing pastel shade, offering both ease and style. With its laid-back design, it's perfect for casual outings and relaxed days. Pair it with shorts and flip-flops for a beachy look, or embrace a more urban vibe with jeans and sneakers. Elevate your casual style with the Loose Fit Pastel Shirt. Order now and experience the perfect blend of comfort and charm for your everyday adventures.",
    price: 50.00,
    product_spec: "Large",
    stock: 6,
    is_stock: true,
    slug: "top_7",
    product_image_path: "../../images/tops/top-7-1.jpg",
    sub_category_id: 9,
    color_id: 1
  },
  {
    product_name: 'Knitted Turtleneck',
    product_desc: "Introducing the Knitted Turtleneck, a cozy and stylish addition to your winter wardrobe. This turtleneck sweater features a warm and textured knit design, offering both comfort and elegance. With its timeless appeal, it's perfect for chilly days and classic winter style. Pair it with your favorite jeans and boots for a chic look, or layer it under a coat for added warmth. Elevate your winter fashion with the Knitted Turtleneck. Order now and embrace the comfort and sophistication of this cold-weather essential.",
    price: 60.00,
    product_spec: "Large",
    stock: 4,
    is_stock: true,
    slug: "top_8",
    product_image_path: "../../images/tops/top-8-1.jpg",
    sub_category_id: 9,
    color_id: 1
  },
  {
    product_name: 'Smart Longsleeve',
    product_desc: "Introducing the Smart Long Sleeve Shirt, a sophisticated and versatile addition to your wardrobe. This shirt features a classic design with long sleeves, offering both timeless style and practicality. With its elegant simplicity, it's perfect for a range of occasions, from business meetings to semi-formal events. Pair it with dress trousers and dress shoes for a polished look, or dress it down with jeans and loafers for a more relaxed ensemble. Elevate your style with the Smart Long Sleeve Shirt. Order now and experience the enduring charm and versatility of this wardrobe staple.",
    price: 50.00,
    product_spec: "Large",
    stock: 3,
    is_stock: true,
    slug: "top_9",
    product_image_path: "../../images/tops/top-9-1.jpg",
    sub_category_id: 4,
    color_id: 1
  },
  {
    product_name: 'Smart White Longsleeve',
    product_desc: "Introducing the Smart White Long Sleeve Shirt, a classic and versatile addition to your wardrobe. This shirt features a timeless design in crisp white, offering both sophistication and practicality. With its long sleeves and elegant simplicity, it's perfect for a range of occasions, from business meetings to formal events. Pair it with tailored trousers and dress shoes for a polished look, or dress it down with jeans and sneakers for a smart-casual ensemble. Elevate your style with the Smart White Long Sleeve Shirt. Order now and embrace the enduring elegance and versatility of this wardrobe staple.",
    price: 55.00,
    product_spec: "Large",
    stock: 8,
    is_stock: true,
    slug: "top_10",
    product_image_path: "../../images/tops/top-10-1.jpg",
    sub_category_id: 4,
    color_id: 1
  },
  {
    product_name: 'Smart Blue Longsleeve',
    product_desc: "Introducing the Smart Blue Long Sleeve Shirt, a refined and versatile addition to your wardrobe. This shirt features a classic design in a rich shade of blue, offering both sophistication and practicality. With its long sleeves and timeless appeal, it's perfect for a range of occasions, from business meetings to formal events. Pair it with tailored trousers and dress shoes for a polished look, or dress it down with jeans and loafers for a smart-casual ensemble. Elevate your style with the Smart Blue Long Sleeve Shirt. Order now and experience the enduring charm and versatility of this wardrobe staple.",
    price: 45.00,
    product_spec: "Large",
    stock: 6,
    is_stock: true,
    slug: "top_11",
    product_image_path: "../../images/tops/top-11-1.jpg",
    sub_category_id: 4,
    color_id: 1
  },

  //blazers
  {
    product_name: 'Navy Blazer',
    product_desc: "Introducing the Navy Blazer, a timeless and versatile piece for your wardrobe. This blazer showcases a classic design in a deep navy hue, offering both sophistication and versatility. With its tailored fit and elegant style, it's perfect for a range of occasions, from business meetings to semi-formal events. Pair it with dress trousers and a crisp white shirt for a polished look, or dress it down with jeans and loafers for a smart-casual ensemble. Elevate your style with the Navy Blazer. Order now and experience the enduring appeal and versatility of this wardrobe essential.",
    price: 70.00,
    product_spec: "Large",
    stock: 4,
    is_stock: true,
    slug: "blazer_1",
    product_image_path: "../../images/blazers/blazer-1-1.jpg",
    sub_category_id: 1,
    color_id: 1
  },
  {
    product_name: 'Navy Blazer with Cufflinks',
    product_desc: "Introducing the Navy Blazer with Cufflinks, a symbol of timeless elegance and attention to detail. This blazer showcases a classic design in a deep navy hue, offering sophistication with a touch of refinement through its cufflink-ready sleeves. With its tailored fit and exquisite style, it's perfect for a range of occasions, from formal gatherings to special events. Pair it with dress trousers, a crisp white shirt, and your favorite cufflinks for a distinguished and polished look that makes a statement. Elevate your style with the Navy Blazer with Cufflinks. Order now and experience the enduring appeal of this wardrobe essential.",
    price: 80.00,
    product_spec: "Large",
    stock: 2,
    is_stock: true,
    slug: "blazer_2",
    product_image_path: "../../images/blazers/blazer-2-1.jpg",
    sub_category_id: 1,
    color_id: 1
  },
  {
    product_name: 'Straight Gray Blazer',
    product_desc: "Introducing the Straight Gray Blazer, a versatile and sophisticated addition to your wardrobe. This blazer features a classic straight-cut design in a timeless shade of gray, offering both elegance and versatility. With its tailored fit and clean lines, it's perfect for a range of occasions, from business meetings to semi-formal events. Pair it with dress trousers and dress shoes for a polished look, or dress it down with jeans and loafers for a smart-casual ensemble. Elevate your style with the Straight Gray Blazer. Order now and experience the enduring charm and versatility of this wardrobe essential.",
    price: 75.00,
    product_spec: "Large",
    stock: 6,
    is_stock: true,
    slug: "blazer_3",
    product_image_path: "../../images/blazers/blazer-3-1.jpg",
    sub_category_id: 1,
    color_id: 1
  },
  {
    product_name: 'Smart Black Blazer',
    product_desc: "Introducing the Smart Black Blazer, a refined and versatile addition to your wardrobe. This blazer features a classic design in timeless black, offering both sophistication and versatility. With its tailored fit and elegant style, it's perfect for a range of occasions, from business meetings to formal events. Pair it with dress trousers and dress shoes for a polished look, or dress it down with jeans and loafers for a smart-casual ensemble. Elevate your style with the Smart Black Blazer. Order now and experience the enduring appeal and versatility of this wardrobe essential.",
    price: 90.00,
    product_spec: "Large",
    stock: 8,
    is_stock: true,
    slug: "blazer_4",
    product_image_path: "../../images/blazers/blazer-4-1.jpg",
    sub_category_id: 1,
    color_id: 1
  },
  {
    product_name: 'Gray Blazer with Buttons',
    product_desc: "Introducing the Gray Blazer with Buttons, a stylish and versatile addition to your wardrobe. This blazer features a classic gray hue and button detailing, offering both sophistication and contemporary style. With its tailored fit and elegant design, it's perfect for a range of occasions, from business meetings to semi-formal events. Pair it with dress trousers and dress shoes for a polished look, or dress it down with jeans and loafers for a smart-casual ensemble. Elevate your style with the Gray Blazer with Buttons. Order now and experience the enduring charm and modern flair of this wardrobe essential.",
    price: 65.00,
    product_spec: "Large",
    stock: 2,
    is_stock: true,
    slug: "blazer_5",
    product_image_path: "../../images/blazers/blazer-5-1.jpg",
    sub_category_id: 1,
    color_id: 1
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
