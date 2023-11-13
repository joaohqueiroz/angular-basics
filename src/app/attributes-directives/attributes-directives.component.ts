import { Component } from '@angular/core';

@Component({
  selector: 'app-attributes-directives',
  templateUrl: './attributes-directives.component.html',
  styleUrl: './attributes-directives.component.scss',
})
export class AttributesDirectivesComponent {
  public isActive: boolean = true;

  public handleIsActive = (): boolean => (this.isActive = !this.isActive);
}
