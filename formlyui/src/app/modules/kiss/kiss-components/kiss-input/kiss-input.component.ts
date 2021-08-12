import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kiss-input',
  templateUrl: './kiss-input.component.html',
  styleUrls: ['./kiss-input.component.scss']
})
export class KissInputComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.buildForm();
  }

  ngOnInit(): void {
  }

  /** Build form 
   *  
   * @return FormGroup
  */
  buildForm(): FormGroup {
    return this.formBuilder.group({
      input: [{value: '', disabled: true}, [
        Validators.required
      ]]
    });
  }
}
