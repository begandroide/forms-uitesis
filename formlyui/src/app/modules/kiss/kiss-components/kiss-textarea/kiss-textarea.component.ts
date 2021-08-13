import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kiss-textarea',
  templateUrl: './kiss-textarea.component.html',
  styleUrls: ['./kiss-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KissTextareaComponent implements OnInit {
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
