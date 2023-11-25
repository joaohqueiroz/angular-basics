import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  public cadastroForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(private fb: FormBuilder) {}

  public submitForm() {
    if (this.cadastroForm.valid) console.log(this.cadastroForm.value);
  }
}
