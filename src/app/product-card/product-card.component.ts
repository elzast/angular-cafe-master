import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../interfaces/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() prodRef!: Products;
  @Output() toggleEvent = new EventEmitter<Products>();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  emitToggleEvent = (product: Products): void => {
    this.toggleEvent.emit(product);
    this.router.navigate(['checkout']);
  };
}
