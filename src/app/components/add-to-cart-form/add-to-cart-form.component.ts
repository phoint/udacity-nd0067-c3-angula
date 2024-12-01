import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CartItemInterface } from '../cart/cart.component';
import { ProductInterface } from '../product-list/product-list.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-add-to-cart-form',
  templateUrl: './add-to-cart-form.component.html',
  styleUrl: './add-to-cart-form.component.css'
})
export class AddToCartFormComponent {
  @Input() cartItem!: CartItemInterface;
  @Output() quantityEvent = new EventEmitter<number>();

  cartService = inject(CartService);

  constructor() {
  }

  addToCart() {
    alert("Add To Cart Successfully!")
    console.log(this.cartItem)
    this.quantityEvent.emit(this.cartItem.quantity);
    this.cartService.addToCart(this.cartItem)

  }

  numSequence(n: number): Array<number> { 
    return Array(n);
  }


}
