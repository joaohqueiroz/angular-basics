import { Component } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrl: './food-add.component.scss',
})
export class FoodAddComponent {
  constructor(private foodListSerivce: FoodListService) {}

  public addItemList = (value: string): void => {
    this.foodListSerivce.foodListAdd(value).subscribe({
      next: (res) => this.foodListSerivce.foodListAlert(res),
      error: (error) => error,
    });
  };
}
