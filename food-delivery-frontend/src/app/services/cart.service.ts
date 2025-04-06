import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  addToCart(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }

  removeFromCart(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
  }

  incrementQuantity(item: any) {
    item.quantity += 1;
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.removeFromCart(item);
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.cartItems = [];
  }
}
