import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItem } from '../module/food-item';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  public emitEvent = new EventEmitter();

  private url: string = 'http://localhost:3000/';
  private foodList: Array<string> = ['Arroz', 'Feijão', 'Macarrão'];
  constructor(private http: HttpClient) {}

  public getFoodList(): Observable<Array<FoodItem>> {
    return this.http.get<Array<FoodItem>>(`${this.url}foodList`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListAdd(value: string): Observable<FoodItem> {
    return this.http
      .post<FoodItem>(`${this.url}foodList`, { nome: value })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListEdit(value: string, id: number): Observable<FoodItem> {
    return this.http
      .put<FoodItem>(`${this.url}foodList/${id}`, { nome: value })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListDelete(id: number): Observable<FoodItem> {
    return this.http
      .delete<FoodItem>(`${this.url}foodList/${id}`)
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListAlert(value: FoodItem) {
    return this.emitEvent.emit(value);
  }
}
