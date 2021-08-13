import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { KissInputComponent, KissTextareaComponent } from '../../../kiss-components';
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
  controlTypeSubscription?: Subscription;;
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
      this.#createDynamicComponent(this.form.controls.controlType.value);
    }
    this.#valueChanges();
  }

  ngOnDestroy(): void {
    this.controlTypeSubscription && this.controlTypeSubscription.unsubscribe();
  }    

  #createDynamicComponent(controlType: KissControlType) {
    let component = null;
    switch (controlType) {
      case KissControlType.Text:
        component = KissInputComponent;
        break;
      case KissControlType.Textarea:
        component = KissTextareaComponent;
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

  /** Observe Value changes of controlType until unsubscribe */
  #valueChanges() {
    this.controlTypeSubscription = this.form.controls.controlType.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(value => {
      this.#createDynamicComponent(value);
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
