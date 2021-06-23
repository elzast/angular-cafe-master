import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  added: Products[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.filterAdded();
  }
  filterAdded = (): void => {
    let products = this.productService.getProducts();
    this.added = products.filter((item) => {
      return item.addCart;
    });
  };
}
