import { Component } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foodItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      price: 299,
      description: 'Classic cheese and tomato pizza',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Veg Burger',
      price: 149,
      description: 'Crispy veggie patty with lettuce and mayo',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Pasta Alfredo',
      price: 199,
      description: 'Creamy white sauce pasta with herbs',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];
}
