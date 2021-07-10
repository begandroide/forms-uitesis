import { Component, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom-input',
  template: `
  <mat-form-field>
    <mat-label>Custom</mat-label>
    <input matInput type="input" [formControl]="formControl" [formlyAttributes]="field">
  </mat-form-field>
  `
})
export class CustomInputComponent extends FieldType {
  formControl!: FormControl;
}