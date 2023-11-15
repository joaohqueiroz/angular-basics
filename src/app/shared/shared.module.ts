import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [HeaderComponentComponent, InputComponent],
  imports: [CommonModule],
  exports: [HeaderComponentComponent, InputComponent],
})
export class SharedModule {}
