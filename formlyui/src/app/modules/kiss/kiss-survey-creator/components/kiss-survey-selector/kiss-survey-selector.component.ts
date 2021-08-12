import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { KissControlOption, KISS_CONTROL_TYPES } from '../../shared/kiss-control-types';

@Component({
  selector: 'app-kiss-survey-selector',
  templateUrl: './kiss-survey-selector.component.html',
  styleUrls: ['./kiss-survey-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KissSurveySelectorComponent implements OnInit {

  @Output() optionChanged: EventEmitter<KissControlOption> = new EventEmitter();

  form: FormGroup;
  controlTypes$: BehaviorSubject<KissControlOption[]> = new BehaviorSubject(KISS_CONTROL_TYPES);

  constructor(private formBuilder: FormBuilder) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
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

  addQuestion() {
    const { controlType } = this.form.value;
    if (controlType) {
      const finded = this.controlTypes$.getValue().find(p => p.value === controlType);
      this.optionChanged.emit(finded);
    }
  }

  get controlType(): AbstractControl {
    return this.form.controls.controlType;
  }
}
