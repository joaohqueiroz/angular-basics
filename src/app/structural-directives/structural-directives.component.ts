import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.scss',
})
export class StructuralDirectivesComponent {
  public nome: string = '';
  public condition: boolean = true;
  public list: Array<{ nome: string }> = [
    { nome: 'João' },
    { nome: 'Aldair' },
    { nome: 'Ceza' },
    { nome: 'Diana' },
  ];

  public switchCondition = (): boolean => (this.condition = !this.condition);

  public add = () => {
    this.list.push({ nome: this.nome });
    this.nome = '';
  };
}
