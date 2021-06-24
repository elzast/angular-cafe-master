import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Products } from '../interfaces/products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  isHidden: boolean = false;
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
  toggleCheckout = (): void => {
    this.isHidden = !this.isHidden;
  };
}
