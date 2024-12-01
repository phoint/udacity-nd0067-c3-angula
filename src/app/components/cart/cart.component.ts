import { Component, computed, effect, ElementRef, inject, OnChanges, signal, ViewChildren, viewChildren } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductListService } from '../../services/product-list.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productService: ProductListService = inject(ProductListService);
  cartService: CartService = inject(CartService);
  router: Router = inject(Router)
  #products = toSignal(this.productService.data$, {initialValue: []})
  cart = this.cartService.cart;

  customerName:string;
  address:string;
  cardNumber:string;
  constructor() {
    this.customerName = '';
    this.address = '';
    this.cardNumber = '';
  }

  
  cartItems = computed(() => {
    let selectedProduct = this.#products().filter(p => this.cart().has(p.id as unknown as string))
    selectedProduct.forEach(p => 
      p.quantity = this.cartService.cart().get(p.id as unknown as string)?.quantity || 1)
    return selectedProduct;
  });

  amount = computed(() => this.cartItems().reduce((amount, item) => (amount + item.price * item.quantity!), 0) || 0);


  changeNumber($event: Event) {
    const inputElement = $event.target as HTMLInputElement;
    let cart = this.cartService.cart();
    let item = cart.get(inputElement.name);
    if (item) {
      if (Number.parseInt(inputElement.value) == 0) {
        alert("Deleted item");
        this.cartService.removeFromCart(item);
      } else {
        item.quantity = Number.parseInt(inputElement.value)
        this.cartService.addToCart(item);
      }
    }
    console.log(JSON.stringify(Object.fromEntries(this.cartService.cart())))
  }

  onSubmit() {
    const totalAmout = this.amount()
    console.log(JSON.parse(JSON.stringify({"amount": this.amount()})))
    this.cartService.clearCart();
    this.router.navigate(['/checkout'], {state: JSON.parse(JSON.stringify({"amount": totalAmout, "customerName": this.customerName}))})
  }

  isValidName: boolean = false;
  validateCustomerName(arg: string) {
    if (arg.length >= 3) {
      this.isValidName = true;
    }
  }

}

export interface CartItemInterface {
  productId: string,
  quantity: number
}