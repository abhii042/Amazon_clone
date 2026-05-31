export const products = [
  {
    id: 1,
    name: 'Samsung 108 cm (43 inches) 4K Ultra HD Smart LED TV UA43AUE65AKXXL',
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/television/d/n/q/-original-imaghx9agrayphaq.jpeg?q=70',
    price: 28990,
    originalPrice: 54900,
    rating: 4.3,
    reviews: 12456,
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Apple iPhone 15 (128 GB) - Black',
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/o/d/-original-imaghx9gyghhgzjq.jpeg?q=70',
    price: 69999,
    originalPrice: 79900,
    rating: 4.6,
    reviews: 8923,
    category: 'Mobiles',
  },
  {
    id: 3,
    name: 'boAt Rockerz 450 Bluetooth On Ear Headphones with Mic',
    image: 'https://rukminim2.flixcart.com/image/416/416/kl2vsi80/headphone/m/s/u/rockerz-450-boat-original-imagybhgbhfktzfk.jpeg?q=70',
    price: 1299,
    originalPrice: 3990,
    rating: 4.1,
    reviews: 54321,
    category: 'Electronics',
  },
  {
    id: 4,
    name: 'Prestige IRIS 750 Watt Mixer Grinder with 3 Stainless Steel Jars',
    image: 'https://rukminim2.flixcart.com/image/416/416/k3bfoy80/mixer-juicer-grinder/z/4/r/iris-750-prestige-original-imafm3ghk4zgjhfz.jpeg?q=70',
    price: 2195,
    originalPrice: 4495,
    rating: 4.3,
    reviews: 18902,
    category: 'Home',
  },
  {
    id: 5,
    name: 'Lenovo IdeaPad Slim 3 Intel Core i5 12th Gen 15.6" (39.62cm) Laptop',
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/o/p/g/-original-imaghzzhgqvmhbsf.jpeg?q=70',
    price: 46990,
    originalPrice: 64990,
    rating: 4.2,
    reviews: 7654,
    category: 'Electronics',
  },
  {
    id: 6,
    name: 'Echo Dot (5th Gen) | Smart speaker with Alexa | Charcoal',
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/speaker/r/m/m/-original-imaghyzhggqhhfgz.jpeg?q=70',
    price: 4499,
    originalPrice: 5499,
    rating: 4.5,
    reviews: 23456,
    category: 'Electronics',
  },
  {
    id: 7,
    name: 'Fastrack Reflex Beat+ Smartwatch with 1.09" TFT Display',
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/8/5/e/-original-imaghyhgz9ghfbzr.jpeg?q=70',
    price: 1995,
    originalPrice: 3995,
    rating: 3.9,
    reviews: 11203,
    category: 'Fashion',
  },
  {
    id: 8,
    name: 'Philips H4 12V 60/55W Standard Halogen Car Headlight Bulb',
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/car-light/m/k/i/-original-imaghgzhgzfhzfhz.jpeg?q=70',
    price: 549,
    originalPrice: 899,
    rating: 4.0,
    reviews: 5432,
    category: 'Automotive',
  },
];

// Using placeholder images that will always load
const PH = (text, bg = '232f3e', color = 'ffffff') =>
  `https://placehold.co/160x160/${bg}/${color}?text=${encodeURIComponent(text)}`;

export const cardSections = [
  {
    id: 1,
    title: 'Revamp your home in style',
    link: 'Explore all',
    items: [
      { label: 'Cushion covers & bedsheets', img: PH('Bedsheets', 'e8d5b7', '333') },
      { label: 'Figurines, vases & more',    img: PH('Decor', 'c8b89a', '333') },
      { label: 'Home storage',               img: PH('Storage', 'd4c5a9', '333') },
      { label: 'Lighting solutions',          img: PH('Lighting', 'f5e6c8', '333') },
    ],
  },
  {
    id: 2,
    title: 'Bulk order discounts + Up to 18% GST savings',
    link: 'Create a free account',
    items: [
      { label: 'Up to 45% off | Laptops',        img: PH('Laptops', '2d3436', 'fff') },
      { label: 'Up to 60% off | Kitchen',        img: PH('Kitchen', '636e72', 'fff') },
      { label: 'Min. 50% off | Furniture',       img: PH('Furniture', '74b9ff', 'fff') },
      { label: 'Up to 60% off | Business',       img: PH('Business', '0984e3', 'fff') },
    ],
  },
  {
    id: 3,
    title: 'Appliances for your home | Up to 55% off',
    link: 'See more',
    items: [
      { label: 'Air conditioners',  img: PH('AC', '0984e3', 'fff') },
      { label: 'Refrigerators',     img: PH('Fridge', '00b894', 'fff') },
      { label: 'Microwaves',        img: PH('Microwave', 'fd79a8', 'fff') },
      { label: 'Washing machines',  img: PH('Washer', 'a29bfe', 'fff') },
    ],
  },
  {
    id: 4,
    title: 'Starting ₹49 | Deals on home essentials',
    link: 'Explore all',
    items: [
      { label: 'Cleaning supplies',    img: PH('Cleaning', '55efc4', '333') },
      { label: 'Bathroom accessories', img: PH('Bathroom', '81ecec', '333') },
      { label: 'Home tools',           img: PH('Tools', 'fdcb6e', '333') },
      { label: 'Wallpapers',           img: PH('Wallpaper', 'e17055', 'fff') },
    ],
  },
];

export const boxSections = [
  {
    id: 1,
    title: 'Get your game on',
    img: PH('Gaming 🎮', '1e3799', 'fff'),
    link: 'Shop gaming',
  },
  {
    id: 2,
    title: 'Shop holiday gift guides',
    img: PH('Gifts 🎁', 'c0392b', 'fff'),
    link: 'Explore holiday gifts',
  },
  {
    id: 3,
    title: 'Up to 50% off | International brands',
    img: PH('Brands 🌍', '8e44ad', 'fff'),
    link: 'See all offers',
  },
  {
    id: 4,
    title: 'Up to 70% off | Kitchen products',
    img: PH('Kitchen 🍳', 'e67e22', 'fff'),
    link: null,
  },
];
