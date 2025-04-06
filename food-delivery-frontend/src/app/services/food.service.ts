import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiUrl = 'http://localhost:5000/api/food';

  constructor(private http: HttpClient) { }

  getFoodItems(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(this.apiUrl);
  }
}
