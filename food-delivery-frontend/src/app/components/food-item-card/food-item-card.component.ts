import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food-item-card',
  templateUrl: './food-item-card.component.html',
  styleUrls: ['./food-item-card.component.css']
})
export class FoodItemCardComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() imageUrl: string = '';
}
