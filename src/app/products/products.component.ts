import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductsFromService();
  }
  getProductsFromService = (): void => {
    this.products = this.productService.getProducts();
  };
  onToggle = (product: Products): void => {
    this.productService.toggleCart(product);
    this.getProductsFromService();
  };
}
