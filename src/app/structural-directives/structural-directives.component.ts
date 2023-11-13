import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.scss',
})
export class StructuralDirectivesComponent {
  public nome: string = '';
  public value: number = 0;
  public condition: boolean = true;
  public list: Array<{ nome: string }> = [
    { nome: 'João' },
    { nome: 'Diana' },
  ];

  public switchCondition = (): boolean => (this.condition = !this.condition);

  public add = () => {
    this.nome.length > 0 && this.list.push({ nome: this.nome });
    this.nome = '';
  };
}
