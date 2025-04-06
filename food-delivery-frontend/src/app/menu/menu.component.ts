import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { FoodService, FoodItem } from '../services/food.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foodItems: FoodItem[] = [];
  addedMessage: string = '';

  constructor(
    private cartService: CartService,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.foodService.getFoodItems().subscribe({
      next: (data) => {
        this.foodItems = data;
      },
      error: (err) => {
        console.error('Failed to fetch food items:', err);
      }
    });
  }

  addToCart(item: FoodItem) {
    this.cartService.addToCart(item);
    this.addedMessage = `${item.name} added to cart!`;

    setTimeout(() => {
      this.addedMessage = '';
    }, 2000);
  }
}
