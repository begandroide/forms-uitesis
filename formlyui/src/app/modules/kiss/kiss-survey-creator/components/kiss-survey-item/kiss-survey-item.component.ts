import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { KissInputComponent } from '../../../kiss-components/kiss-input/kiss-input.component';
import { KissControlOption, KissControlType, KISS_CONTROL_TYPES } from '../../shared/kiss-control-types';
import { KissSurveyItem } from '../../shared/kiss-survey-item';
import { KissSurveyHeaderComponent } from '../kiss-survey-header/kiss-survey-header.component';

@Component({
  selector: 'app-kiss-survey-item',
  templateUrl: './kiss-survey-item.component.html',
  styleUrls: ['./kiss-survey-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KissSurveyItemComponent implements OnInit, AfterViewInit {

  @ViewChild('dynamicComponent', { read: ViewContainerRef}) dynamicComponentRef?: ViewContainerRef;

  @Input() controlType!: KissSurveyItem;
  @Input() index!: number;

  controlTypes$: BehaviorSubject<KissControlOption[]> = new BehaviorSubject(KISS_CONTROL_TYPES);

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private componentFactory: ComponentFactoryResolver) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    if (this.controlType) {
      this.form.controls.controlType.setValue(this.controlType.type.value);
    }
  }
  
  ngAfterViewInit(): void {
    // IF controlType is not empty, create dynamic component
    if (this.controlType) {
      this.createDynamicComponent();
    }
  }

  createDynamicComponent() {
    let component = null;
    switch (this.form.controls.controlType.value) {
      case KissControlType.Text:
        component = KissInputComponent;
        break;
      default:
        component = KissSurveyHeaderComponent;
        break;
    }

    // clear dynamic component
    if (this.dynamicComponentRef) {
      this.dynamicComponentRef.clear();
      const componentFactory = this.componentFactory.resolveComponentFactory(component);
      const componentRef = this.dynamicComponentRef?.createComponent(componentFactory);
      componentRef!.instance.ngOnInit();
    }
  }

  /**
   * Build FormGroup with question and controlType
   * @return FormGroup
   **/
  buildForm(): FormGroup {
    return this.formBuilder.group({
      question: ['', [Validators.required]],
      controlType: ['', [Validators.required]]
    });
  }

  /** Getter of question control */
  get questionControl(): AbstractControl {
    return this.form.controls.question;
  }

  /** Getter title of survey item */
  get title(): string {
    if (this.questionControl.value) {
      return `${this.index}. ${this.questionControl.value}`;
    }
    return `${this.index}. (Pregunta por definir)`;
  }
}
