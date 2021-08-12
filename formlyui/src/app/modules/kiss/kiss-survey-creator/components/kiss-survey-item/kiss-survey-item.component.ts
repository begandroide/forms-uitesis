import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { KissControlOption, KissControlType, KISS_CONTROL_TYPES } from '../../shared/kiss-control-types';
import { KissSurveyHeaderComponent } from '../kiss-survey-header/kiss-survey-header.component';

@Component({
  selector: 'app-kiss-survey-item',
  templateUrl: './kiss-survey-item.component.html',
  styleUrls: ['./kiss-survey-item.component.scss']
})
export class KissSurveyItemComponent implements OnInit, AfterViewInit {

  @ViewChild('dynamicComponent', { read: ViewContainerRef}) dynamicComponentRef?: ViewContainerRef;

  @Input() controlType!: KissControlOption;

  controlTypes$: BehaviorSubject<KissControlOption[]> = new BehaviorSubject(KISS_CONTROL_TYPES);

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private componentFactory: ComponentFactoryResolver) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    if (this.controlType) {
      this.form.controls.controlType.setValue(this.controlType.value);
    }
  }
  
  ngAfterViewInit(): void {
    // IF controlType is not empty, create dynamic component
    if (this.controlType) {
      this.createDynamicComponent();
    }
  }

  createDynamicComponent() {
    let component = {};
    switch (this.form.controls.controlType.value) {
      case KissControlType.Text:
      default:
        component = KissSurveyHeaderComponent;
        break;
    }
    const componentFactory = this.componentFactory.resolveComponentFactory(KissSurveyHeaderComponent);
    const componentRef = this.dynamicComponentRef?.createComponent(componentFactory);
    // componentRef!.instance.question = this.form.controls.question.value;
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
}
