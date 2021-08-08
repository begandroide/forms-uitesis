import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { SliderComponent } from '../../components/slider/slider.component';
import { DynamicFormsService } from '../../services/dynamic-forms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent extends FieldWrapper implements OnInit {
  @ViewChild('fieldComponent',   { read: ViewContainerRef }) dynamicContent!: ViewContainerRef;
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) dynamicField!  : ViewContainerRef;

  selectorInputType = new FormControl({value: ''}, [Validators.required]);

  constructor(
    private dynamicFormService: DynamicFormsService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { 
    super();
  }
  ngOnInit(): void {
    this.selectorInputType.valueChanges.pipe(distinctUntilChanged()).subscribe((value) => {
      let model: FormlyFieldConfig = {};
      switch (value) {
        case 'input':
          model = {
            defaultValue: '',
            className: 'col-sm-4',
            type: 'input',
            key: 'pregunta',
            templateOptions: {
              label: 'Título',
              required: true,
            },
          };   
          break;
        case 'textarea':
          model = {
            defaultValue: '',
            className: 'col-sm-4',
            type: 'textarea',
            key: 'pregunta',
            templateOptions: {
              label: 'Título',
              required: true,
            }
          };
          break;
        case 'radios':
          model = {

          };
          break;
        case 'checkbox':
          model = {

          };
          break;
      }
      this.dynamicFormService.addSubfield(this.indexFieldGroup, model);
    });
   }

  public addQuestion(): void {
    this.dynamicFormService.addField(this.indexFieldGroup + 1);
  }

  public removeQuestion() {
    this.dynamicFormService.deleteField(this.indexFieldGroup);
  }

  private get indexFieldGroup() {
    return (this.field as any)?.index ?? 0;
  }
}
