import { Injectable, Output } from '@angular/core';
import { Products } from './interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Products[] = [
    {
      name: 'Coffee',
      image: 'https://i.ibb.co/MgnWbww/coffee-product.jpg',
      price: 2,
      type: 'coffee',
      addCart: false,
    },
    {
      name: 'Tea',
      image: 'https://i.ibb.co/tPgPydk/tea.png',
      price: 2,
      type: 'tea',
      addCart: false,
    },
    {
      name: 'Cupcake',
      image: 'https://i.ibb.co/Pwxhc92/cupcake-product.jpg',
      price: 3,
      type: 'sweets',
      addCart: false,
    },
    {
      name: 'Latte',
      image: 'https://i.ibb.co/DL2YmmT/latte-product.jpg',
      price: 4,
      type: 'coffee',
      addCart: false,
    },
    {
      name: 'Matcha Latte',
      image: 'https://i.ibb.co/CwP91tq/matcha-product.jpg',
      price: 4.5,
      type: 'tea',
      addCart: false,
    },
    {
      name: 'Cookies 3pk',
      image: 'https://i.ibb.co/Sf1mH3w/cookies-product.jpg',
      price: 5,
      type: 'sweets',
      addCart: false,
    },
    {
      name: 'London Fog',
      image: 'https://i.ibb.co/4fWQFcB/londonfog.jpg',
      price: 4,
      type: 'tea',
      addCart: false,
    },
    {
      name: 'Espresso',
      image:
        'https://i.ibb.co/h2czYrP/shot-of-espresso-coffee-isolated-on-white.jpg',
      price: 2.5,
      type: 'coffee',
      addCart: false,
    },
    {
      name: 'Cake Pop',
      image: 'https://i.ibb.co/0n6RnVJ/cakepop.jpg',
      price: 2.5,
      type: 'sweets',
      addCart: false,
    },
    {
      name: 'Cake Slice',
      image: 'https://i.ibb.co/dD0wMbG/sweets.png',
      price: 3,
      type: 'sweets',
      addCart: false,
    },
    {
      name: 'Coffee Mug',
      image: 'https://i.ibb.co/nL9krv4/coffeemug.jpg',
      price: 10,
      type: 'other',
      addCart: false,
    },
    {
      name: 'Cafe Shirt',
      image: 'https://i.ibb.co/ftDQRQ8/Dev-You2020-Logo-with-border.png',
      price: 20,
      type: 'other',
      addCart: false,
    },
  ];
  constructor() {}

  getProducts = (): Products[] => {
    return this.products;
  };

  toggleCart = (products: Products): void => {
    products.addCart = !products.addCart;
  };
}
