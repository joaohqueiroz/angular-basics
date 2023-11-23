import { Component, OnInit } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';
import { FoodItem } from '../../module/food-item';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss',
})
export class FoodListComponent implements OnInit {
  public foodList: Array<FoodItem> = [];

  constructor(private foodListSerivce: FoodListService) {}

  ngOnInit(): void {
    this.foodListSerivce.getFoodList().subscribe({
      next: (res) => (this.foodList = res),
      error: (error) => error,
    });

    this.foodListSerivce.emitEvent.subscribe((res) => this.foodList.push(res));
  }

  public deleteItem(id: number) {
    this.foodListSerivce.foodListDelete(id).subscribe({
      next: (res) => {
        this.foodList = this.foodList.filter((item) => item.id !== id);
      },
      error: (error) => error,
    });
  }

  public editItem(value: string, id: number) {
    this.foodListSerivce.foodListEdit(value, id).subscribe({
      next: (res) => res,
      error: (error) => error,
    });
  }
}
