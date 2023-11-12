import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.scss',
})
export class StructuralDirectivesComponent  {
  public condition: boolean = true;

  public switchCondition = (): boolean => this.condition = !this.condition;
}
