import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], // 👈 Import CommonModule
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  incrementQuantity(item: any) {
    this.cartService.incrementQuantity(item);
  }

  decrementQuantity(item: any) {
    this.cartService.decrementQuantity(item);
  }

  removeItem(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
  placeOrder() {
    if (this.cartItems.length > 0) {
      alert('Order placed successfully!');
      this.cartService.clearCart();
      this.cartItems = [];
    } else {
      alert('Your cart is empty.');
    }
  }
  clearCart() {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCartItems(); // Refresh UI
  }
  
  
}
