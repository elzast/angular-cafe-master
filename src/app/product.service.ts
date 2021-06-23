import { Injectable, Output } from '@angular/core';
import { Products } from './interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Products[] = [
    {
      name: 'Coffee',
      image: 'url-here',
      price: 2,
      type: 'coffee',
      addCart: false,
    },
    {
      name: 'Tea',
      image: 'url-here',
      price: 2,
      type: 'tea',
      addCart: false,
    },
    {
      name: 'Cupcake',
      image: 'url-here',
      price: 3,
      type: 'sweets',
      addCart: false,
    },
    {
      name: 'Latte',
      image: 'url-here',
      price: 4,
      type: 'coffee',
      addCart: false,
    },
    {
      name: 'Matcha Latte',
      image: 'url-here',
      price: 4.5,
      type: 'tea',
      addCart: false,
    },
    {
      name: 'Cookies 3pk',
      image: 'url-here',
      price: 5,
      type: 'sweets',
      addCart: false,
    },
    {
      name: 'London Fog',
      image: 'url-here',
      price: 4,
      type: 'tea',
      addCart: false,
    },
    {
      name: 'Espresso',
      image: 'url-here',
      price: 2.5,
      type: 'coffee',
      addCart: false,
    },
    {
      name: 'Cake Pop',
      image: 'url-here',
      price: 2.5,
      type: 'sweets',
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
