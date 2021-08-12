import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { KissControlOption, KISS_CONTROL_TYPES } from '../../shared/kiss-control-types';

@Component({
  selector: 'app-kiss-survey-selector',
  templateUrl: './kiss-survey-selector.component.html',
  styleUrls: ['./kiss-survey-selector.component.scss']
})
export class KissSurveySelectorComponent implements OnInit {

  @Output() optionChanged: EventEmitter<KissControlOption> = new EventEmitter();

  form: FormGroup;
  controlTypes$: BehaviorSubject<KissControlOption[]> = new BehaviorSubject(KISS_CONTROL_TYPES);

  constructor(private formBuilder: FormBuilder) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.onControlTypeChanged();
  }

  /**
   * Build the form with formcontrol select
   * @memberOf KissSurveySelectorComponent
   * @private
   * @returns {FormGroup}
   **/
  private buildForm(): FormGroup {
    return this.formBuilder.group({
      controlType: ['', [Validators.required]]
    });
  }

  onControlTypeChanged(): void {
    this.form.controls.controlType.valueChanges.subscribe(async controlType => {
      if (controlType) {
        // get value of controlType list
        const finded = this.controlTypes$.getValue().find(p => p.value === controlType);
        if (finded) {
          this.optionChanged.emit(finded);
        }
      }
    });
  }
}
