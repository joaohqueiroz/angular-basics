import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  public nome: string = 'João';
  public idade: number = 23;

  public checkedDisabled: boolean = true;
  public imgUrl: string = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png';
}
