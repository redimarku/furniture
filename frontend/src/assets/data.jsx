import latest_1 from './latestCollecion1.png'
import bedrom from './bedrom.jpg'
import office from './office.jpg'
import dining from './dining.jpg'
import lounge from './lounge.jpg'
import living from './living.png'
import sofa from './sofa.jpg'
import chairProduct from './chairProduct.jpg'
import product4 from './product4.jpg'
import product5 from './product5.png'
import product6 from './product6.jpg'
import product7 from './product7.jpg'
import product8 from './product8.jpg'
import product9 from './product9.jpg'
import product10 from './product10.jpg'
import product11 from './product11.jpg'
import product1_1 from './product1_1.jpg'
import policy1 from './policy1.png'
import policy2 from './policy2.png'
import policy3 from './policy3.png'


export const products = [
  {
     id: 1,
    image: [product8, product1_1],
    name: 'Living Room Sets',
    newPrice: "10.0",
    oldPrice: '180.0',
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    category: "dining",
    subcategory: "dining",
    bestseller: false,
    date: 1719915311964,
  },
  {
    id: 2,
    image: sofa,
    name: 'Sofa for living room',
    newPrice: "50.0",
    oldPrice: '110.0',
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    category: "dining",
    subcategory: "living",
    bestseller: false,

  },
  
   {
    id: 3,
    image: chairProduct,
    name: 'Living Room Sets',
    newPrice: "150.0",
    oldPrice: '110.0',
    category: "dining",
    subcategory: "living",
    bestseller: true,

  }, 

  {
    id: 4,
    image: product4,
    name: 'Living Room Sets',
    newPrice: "150.0",
    oldPrice: '110.0',
    category: "living",
    subcategory: "living",
    bestseller: false,

  },

  {
    id: 5,
    image: product5,
    name: 'Living Room Sets',
    newPrice: "80.0",
    oldPrice: '110.0',
    category: "living",
    subcategory: "living",
    bestseller: true,

  },

  {
    id: 6,
    image: product6,
    name: 'Living Room Sets',
    newPrice: "60.0",
    oldPrice: '110.0',
    category: "living",
    subcategory: "living",
    bestseller: true,

  },

  {
    id: 7,
    image: product7,
    name: 'Living Room Sets',
    newPrice: "20.0",
    oldPrice: '110.0',
    category: "bedroom",
    subcategory: "living",
    bestseller: true,

  },

  {
    id: 8,
    image: latest_1,
    name: 'Living Room Sets',
    newPrice: "30.0",
    oldPrice: '110.0',
    category: "bedroom",
    subcategory: "living",
    bestseller: true,

  },
    {
    id: 9,
    image: product9,
    name: 'Bedroom',
    newPrice: "40.0",
    oldPrice: '110.0',
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    category: "Bedroom",
    subcategory: "living",
    bestseller: false,

  },
    {
    id: 10,
    image: product10,
    name: 'Bedroom',
    newPrice: "70.0",
    oldPrice: '110.0',
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    category: "Bedroom",
    subcategory: "living",
    bestseller: false,

  },
    {
    id: 11,
    image: product11,
    name: 'Bedroom',
    newPrice: "90.0",
    oldPrice: '110.0',
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    category: "Bedroom",
    subcategory: "living",
    bestseller: false,

  },
  
];

export const assets = [
  {
    id: 1,
    image: policy1
  },
  {
    id: 2,
    image: policy2
  },
  {
    id: 3,
    image: policy3
  }
]


export const categories = [
  {
    image: bedrom,
    name: 'Bedroom',
    link: '/collection/bedroom'
  },
  {
    image: living,
    name: 'Living',
    link: '/collection/living'
  },
  {
    image: dining,
    name: 'Dining'
  },
  {
    image: lounge,
    name: 'Lounge'
  },
  {
    image: office,
    name: 'Office Chair'
  },  
]