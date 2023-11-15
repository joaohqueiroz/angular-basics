import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [HeaderComponentComponent, InputComponent, OutputComponent],
  imports: [CommonModule],
  exports: [HeaderComponentComponent, InputComponent, OutputComponent],
})
export class SharedModule {}
