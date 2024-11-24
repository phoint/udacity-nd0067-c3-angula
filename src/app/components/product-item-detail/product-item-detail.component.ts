import { Component, inject, Input } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { ProductInterface } from '../product-list/product-list.component';
import { CartService } from '../../services/cart.service';
import { CartItemInterface } from '../cart/cart.component';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css'
})
export class ProductItemDetailComponent {
  product: ProductInterface;
  productService = inject(ProductListService);
  cartItem: CartItemInterface;
  cartService = inject(CartService);
  @Input() set id(productId: string) {
    this.productService.getProductById(productId).subscribe(res => {
      const cart = this.cartService.cart();
      this.product = {
        ...res,
        quantity: cart.get((res.id as unknown) as string)?.quantity || 1
      }
      this.cartItem = {
        productId: (this.product.id as unknown) as string,
        quantity: this.product.quantity || 1
      }
    });
  };

  constructor() {
    this.product = {
      id: 0,
      name: "",
      price: 0.00,
      url: "",
      description: ""
    };

    this.cartItem = {
      productId: "0",
      quantity: 0
    }
  }
}
