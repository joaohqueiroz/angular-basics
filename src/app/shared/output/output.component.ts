import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss',
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'João', idade: 23 },
    { nome: 'Diana', idade: 25 },
  ];

  public getDados = (value: number): void => {
    this.enviarDados.emit(this.list[value]);
  };
}
