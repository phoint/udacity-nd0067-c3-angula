import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  cartService = inject(CartService);
  amount:number;
  customerName:string;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.amount = navigation?.extras.state?.['amount']
    this.customerName = navigation?.extras.state?.['customerName']
  }
}
