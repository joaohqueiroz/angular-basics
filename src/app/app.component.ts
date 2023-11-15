import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public addValue: number = 0;

  public add = (): number => this.addValue++;
}
