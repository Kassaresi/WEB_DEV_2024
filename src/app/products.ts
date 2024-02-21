export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  img: string;
  kaspi_link: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    price: 614666,
    description: `технология NFC: Да
    цвет: серый
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.7 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
    rating: 4.8,
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000"
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    price: 245170,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD
    диагональ: 6.1 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium",
    rating: 4.5,
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000"
  },
  {
    
    id: 3,
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
    kaspi_link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000"
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: 325969,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.1 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium",
    rating: 4.5,
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000"
  },
  {
    id: 5,
    name: 'Смартфон Samsung Galaxy A24 6 ГБ/128 ГБ черный',
    price: 89593,
    description: 'long battery life, bright display',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium",
    rating: 4.3,
    kaspi_link : "https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000"
  },
  {
    id: 6,
    name: 'Смартфон Xiaomi Redmi 12C 4 ГБ/128 ГБ серый',
    price: 49290,
    description: `технология NFC: Нет
    цвет: серый
    тип экрана: IPS LCD
    диагональ: 6.71 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/ha6/h82/69586957697054.jpg?format=gallery-medium",
    rating: 4.2,
    kaspi_link : "https://kaspi.kz/shop/p/xiaomi-redmi-12c-4-gb-128-gb-seryi-109149311/?c=750000000"
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A54 5G 8 ГБ/256 ГБ черный',
    price: 163841,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: Super AMOLED, сенсорный
    диагональ: 6.4 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h81/h13/80435536887838.jpg?format=gallery-medium",
    rating: 4.9,
    kaspi_link : "https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=750000000"
  },
  {
    id: 8,
    name: 'Смартфон Apple iPhone 13 128Gb зеленый',
    price: 287723,
    description: `технология NFC: Да
    цвет: зеленый
    тип экрана: OLED, Super Retina XDR
    диагональ: 6.1 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium",
    rating: 4.9,
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000"
  },
  {
    id: 9,
    name: 'Смартфон Samsung Galaxy A54 5G 6 ГБ/128 ГБ черный',
    price: 142351,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: Super AMOLED, сенсорный
    диагональ: 6.4 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc4/h8b/80435552223262.jpg?format=gallery-medium",
    rating: 4.7,
    kaspi_link : "https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-6-gb-128-gb-chernyi-110044409/?c=750000000"
  },
  {
    id: 10,
    name: 'Смартфон Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    price: 158000,
    description: `-технология NFC: Нет
    -цвет: черный
    -тип экрана: IPS, сенсорный
    -диагональ: 6.79 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium",
    rating: 5,
    kaspi_link : "https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000"
  },
  

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/