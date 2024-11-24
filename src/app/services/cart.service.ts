import { computed, effect, Injectable, Signal, signal } from '@angular/core';
import { CartItemInterface } from '../components/cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  #localStorage = signal(
    JSON.parse(localStorage.getItem("cart")!) as CartItemInterface[] || []
  );
  cart = computed(() => {
    return this.#localStorage()?.reduce((map: Map<string, CartItemInterface>, item: CartItemInterface) => {
      map.set(item.productId, item)
      return map;
    }, new Map<string, CartItemInterface>()) || new Map<string, CartItemInterface>();
  });
  // localStorage = this.#localStorage.asReadonly();
  synchronizeCartEffect = effect(() => {
    localStorage.setItem("cart", JSON.stringify(this.#localStorage()));
  })

  addToCart(item: CartItemInterface): void {
    this.#localStorage.update((prev) => {
      let newCart = prev.filter(i => i.productId != item.productId)
      return [...newCart, item];
    })
  }

  removeFromCart(item: CartItemInterface): void {
    this.#localStorage.update((prev) => prev.filter(i => i.productId != item.productId))
  }

  clearCart(): void {
    this.#localStorage.set([]);
  }
}
