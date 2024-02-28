export interface Product {
  [x: string]: any;
  id: number;
  category: number;
  name: string;
  price: number;
  description: string;
  rating: number
  img: string;
  kaspi_link: string;
  like: number;
}

export const products = [
  {
    id: 1, category: 1,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 298528,
    description: `
      -технология NFC: Да
      -цвет: черный
      -тип экрана: OLED, Super Retina XDR
      -диагональ: 6.1 дюйм
    `,
    rating: 4.5,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-small",
    kaspi_link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    like: 0
  },
  {
    id: 2,category: 1,
    name: 'Смартфон Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    price: 158000,
    description: `-технология NFC: Нет
    -цвет: черный
    -тип экрана: IPS, сенсорный
    -диагональ: 6.79 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium",
    rating: 5,
    kaspi_link : "https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000"
    ,like: 0
  },
  {
    id: 3,category: 1,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    price: 614666,
    description: `технология NFC: Да
    цвет: серый
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.7 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
    rating: 4.8,
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000"
    ,like: 0
  },
  {
    id: 4,category: 1,
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: 325969,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.1 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium",
    rating: 4.5,
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000"
    ,like: 0
  },
  {
    id: 5,category: 1,
    name: 'Смартфон Samsung Galaxy A24 6 ГБ/128 ГБ черный',
    price: 89593,
    description: 'long battery life, bright display',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium",
    rating: 4.3,
    kaspi_link : "https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000"
    ,like: 0
  },
  {
    id: 6,category: 1,
    name: 'Смартфон Xiaomi Redmi 12C 4 ГБ/128 ГБ серый',
    price: 49290,
    description: `технология NFC: Нет
    цвет: серый
    тип экрана: IPS LCD
    диагональ: 6.71 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/ha6/h82/69586957697054.jpg?format=gallery-medium",
    rating: 4.2,
    kaspi_link : "https://kaspi.kz/shop/p/xiaomi-redmi-12c-4-gb-128-gb-seryi-109149311/?c=750000000"
    ,like: 0
  },
  {
    id: 7,category: 1,
    name: 'Смартфон Samsung Galaxy A54 5G 8 ГБ/256 ГБ черный',
    price: 163841,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: Super AMOLED, сенсорный
    диагональ: 6.4 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h81/h13/80435536887838.jpg?format=gallery-medium",
    rating: 4.9,
    kaspi_link : "https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=750000000",
    like: 0
  },
  {
    id: 8,category: 1,
    name: 'Смартфон Apple iPhone 13 128Gb зеленый',
    price: 287723,
    description: `технология NFC: Да
    цвет: зеленый
    тип экрана: OLED, Super Retina XDR
    диагональ: 6.1 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium",
    rating: 4.9,
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000"
    ,like: 0
  },
  {
    id: 9,category: 1,
    name: 'Смартфон Samsung Galaxy A54 5G 6 ГБ/128 ГБ черный',
    price: 142351,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: Super AMOLED, сенсорный
    диагональ: 6.4 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc4/h8b/80435552223262.jpg?format=gallery-medium",
    rating: 4.7,
    kaspi_link : "https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-6-gb-128-gb-chernyi-110044409/?c=750000000"
    ,like: 0
  },
  {
    id: 10,category: 1,
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    price: 245170,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD
    диагональ: 6.1 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-medium",
    rating: 4.5,
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000"
    ,like: 0
  },
  {
    id: 11,
    category: 1,
    name: 'Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    price: 799,
    description: `технология NFC: 
    Нет цвет: серый 
    тип экрана: IPS LCD 
    диагональ: 6.71 дюйм`,
    img: "https://m.media-amazon.com/images/I/71bfERiBXSL._AC_UY218_.jpg",
    rating: 4.5,
    kaspi_link : "https://www.amazonhttps://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000.com/TracFone-iPhone-Prepaid-Smartphone-Locked/dp/B08WJNJQYW/ref=sr_1_1?crid=11SVNB8JBCSG2&keywords=iphone+xr&qid=1647084646&sprefix=iphone+xr+ca%2Caps%2C366&sr=8-1"
    ,like: 0
  },
  {
    id: 12,category: 1,
    name: 'Phone Samsung Mini A52',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img: "https://m.media-amazon.com/images/I/71ei4H2B0-L._AC_UY218_.jpg",
    rating: 4.5,
    kaspi_link : "https://www.amazon.com/Samsung-Galaxy-A52s-5G-Unlocked/dp/B09GRGVMBB/ref=sr_1_17?crid=5DXC994T3AZ6&keywords=samsung&qid=1647084752&sprefix=sams%2Caps%2C616&sr=8-17"
    ,like: 0
  },
  {
    id: 13,category: 1,
    name: 'Aplle Phone Standard 12 PRO Max',
    price: 299,
    description: 'Apple iPhone 12 Pro Max',
    img: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFNMBWL/ref=sr_1_1?crid=KHMHIKAWRF58&keywords=iphone+12+pro&qid=1647084805&sprefix=iphone+12+pr%2Caps%2C343&sr=8-1"
    ,like: 0},
  {
    id: 14,category: 1,
    name: 'Samsung Galaxy S20',
    price: 700,
    description: 'FE 5G (128GB, 6GB) 6.5" AMOLED, Snapdragon 865, IP68 Water Resistant',
    img: "https://m.media-amazon.com/images/I/514ByLfO+oL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Samsung-Factory-Unlocked-Smartphone-Pro-Grade/dp/B08FYTSXGQ/ref=sr_1_1?crid=2H7CEE2SM5PZQ&keywords=samsung+galaxy+s20&qid=1647085003&sprefix=samsung+galaxy+s22%2Caps%2C350&sr=8-1"
    ,like: 0},
  {
    id: 15,category: 1,
    name: 'Samsung galaxy S22 ',
    price: 999,
    description: 'long battery life, bright display',
    img: "https://m.media-amazon.com/images/I/81Ulnpn3ZpL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Samsung-Snapdragon-Resistant-Unlocked-International/dp/B09PLNBG4H/ref=sr_1_5?crid=1UH9CU0G7W8H&keywords=samsung+galaxy+s22&qid=1647084971&sprefix=samsung+galaxy+s22%2Caps%2C362&sr=8-5"
    ,like: 0},
  {
    id: 16,category: 1,
    name: 'Xiaomi 11T',
    price: 432,
    description: '108mp tripple camera, NFC dual sim',
    img: "https://m.media-amazon.com/images/I/51Wr13eabnL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Xiaomi-11T-Compatible-Unlocked-Meteorite/dp/B09JX9HG77/ref=sr_1_1?crid=2U8K4BQZB0EWN&keywords=xiaomi+11t&qid=1647085028&sprefix=xiaomi+1%2Caps%2C283&sr=8-1"
    ,like: 0},
  {
    id: 17,category: 1,
    name: 'Xiaomi redmi 9A',
    price: 299,
    description: '2Gb + 32 gb',
    img: "https://m.media-amazon.com/images/I/81oPj2JzHDL._AC_UY218_.jpg",
    rating: 4.5,
    kaspi_link : "https://www.amazon.com/Xiaomi-Display-Unlocked-Global-Version/dp/B08CGXVPXW/ref=sr_1_1?crid=G5H4WN31MXOQ&keywords=xiaomi+redmi+9a&qid=1647085051&sprefix=xiaomi+redmi+%2Caps%2C309&sr=8-1",
    like: 0
  },

  {
  id: 18,category: 1,
  name: 'Смартфон Huawei P60 8 ГБ/256 ГБ черный',
  price: 899,
  description: `технология NFC: Да
  цвет: черный
  тип экрана: OLED, сенсорный
  диагональ: 6.67 дюйм`,
  img: "https://resources.cdn-kaspi.kz/img/m/p/h0f/h21/80819883540510.jpg?format=gallery-medium",
  rating: 4.7,
  kaspi_link : "https://www.amahttps://kaspi.kz/shop/p/huawei-p60-8-gb-256-gb-chernyi-110412395/?c=750000000zon.com/Xiaomi-Display-Unlocked-Global-Version/dp/B08CGXVPXW/ref=sr_1_1?crid=G5H4WN31MXOQ&keywords=xiaomi+redmi+9a&qid=1647085051&sprefix=xiaomi+redmi+%2Caps%2C309&sr=8-1",
  like: 0
},

{
  id: 19,category: 1,
  name: 'Смартфон Huawei nova Y91 8 ГБ/128 ГБ серебристый',
  price: 199,
  description: `технология NFC: Да
  цвет: серебристый
  тип экрана: LCD, сенсорный
  диагональ: 6.95 дюйм`,
  img: "https://resources.cdn-kaspi.kz/img/m/p/he5/h8f/81124914987038.png?format=gallery-medium",
  rating: 4.5,
  kaspi_link : "https://whttps://kaspi.kz/shop/p/huawei-nova-y91-8-gb-128-gb-serebristyi-110714340/?c=750000000ww.amazon.com/Xiaomi-Display-Unlocked-Global-Version/dp/B08CGXVPXW/ref=sr_1_1?crid=G5H4WN31MXOQ&keywords=xiaomi+redmi+9a&qid=1647085051&sprefix=xiaomi+redmi+%2Caps%2C309&sr=8-1",
  like: 0
},

{
  id: 20,category: 1,
  name: `Смартфон Huawei nova 11 Pro 8 ГБ/256 ГБ зеленый`,
  price: 349,
  description: `технология NFC: Да
  цвет: зеленый
  тип экрана: OLED, сенсорный
  диагональ: 6.78 дюйм`,
  img: "https://resources.cdn-kaspi.kz/img/m/p/he5/h28/82089169485854.jpg?format=gallery-medium",
  rating: 4.4,
  kaspi_link : "https://www.amazon.com/Xiaomi-Display-Unlocked-Global-Verhttps://resources.cdn-kaspi.kz/img/m/p/he5/h28/82089169485854.jpg?format=gallery-mediumion/dp/B08CGXVPXW/ref=sr_1_1?crid=G5H4WN31MXOQ&keywords=xiaomi+redmi+9a&qid=1647085051&sprefix=xiaomi+redmi+%2Caps%2C309&sr=8-1",
  like: 0
},

  

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/