import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kiss-input',
  templateUrl: './kiss-input.component.html',
  styleUrls: ['./kiss-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KissInputComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private cdRef: ChangeDetectorRef) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.form.disable();
    this.cdRef.detectChanges();
  }

  /** Build form 
   *  
   * @return FormGroup
  */
  buildForm(): FormGroup {
    return this.formBuilder.group({
      input: ['', [
        Validators.required
      ]]
    });
  }
}
