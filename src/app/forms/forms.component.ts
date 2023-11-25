import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  public listComidas: Array<{ comida: string; preco: number }> = [
    {
      comida: 'Salada',
      preco: 10,
    },
    {
      comida: 'Peixe',
      preco: 11,
    },
    {
      comida: 'Arroz',
      preco: 12,
    },
  ];

  public submitForm(form: NgForm) {
    console.log(form.value);
  }
}
