import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public addValue: number = 0;
  public getDados: { nome: string; idade: number } | undefined;

  public add = (): number => this.addValue++;

  public setDados = (event: { nome: string; idade: number }): void => {
    this.getDados = event;
  };
}
