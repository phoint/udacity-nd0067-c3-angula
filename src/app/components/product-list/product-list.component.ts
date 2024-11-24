import { Component, computed, inject, Signal } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { CartService } from '../../services/cart.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productService: ProductListService = inject(ProductListService);
  cartService: CartService = inject(CartService);
  #products = toSignal(this.productService.data$, {initialValue: []})

  cart = this.cartService.cart();
  products = computed(() => this.#products().map(p => {
    const quantity = this.cart.get((p.id as unknown) as string)?.quantity;
    return {...p, quantity : quantity || 1}
  }));
  
  // ngOnInit(): void {
  //   const cart = this.cartService.cart();
  //   this.productService.getProductList().subscribe(res => this.products =res.map(p => {
  //     const quantity = cart.get((p.id as unknown) as string)?.quantity;
  //     return {...p, quantity : quantity || 1}
  //   }));
  // }
}

export interface ProductInterface {
  id: number,
  name: string,
  price: number,
  url: string,
  description: string
  quantity?: number
}
