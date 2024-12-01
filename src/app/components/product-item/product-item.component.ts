import { Component, EventEmitter, inject, Input } from '@angular/core';
import { ProductInterface } from '../product-list/product-list.component';
import { CartService } from '../../services/cart.service';
import { CartItemInterface } from '../cart/cart.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input({}) product: ProductInterface;
  cartItem: CartItemInterface;
  cartService = inject(CartService);
  constructor() {
    this.product = {
      id: 0,
      name: "demo product",
      price: 9.99,
      url: "http://localhost:4200/products/0",
      description: "this is a demo product",
      quantity: 1
    }

    this.cartItem = {
      productId: "0",
      quantity: 0
    }
  }

  changeQuantity($event: number) {
    console.log("select %d for product %s", $event, this.product.id)
  }

  ngAfterViewInit() {
    this.cartItem = {
      productId: (this.product.id as unknown) as string,
      quantity: this.product.quantity || 1
    }
  }

  numSequence(n: number): Array<number> { 
    return Array(n);
  } 

}
