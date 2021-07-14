import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldWrapper } from '@ngx-formly/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { DynamicFormsService } from '../../services/dynamic-forms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent extends FieldWrapper implements OnInit {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) dynamicContent!: ViewContainerRef;
  selectorInputType = new FormControl();

  constructor(
    private dynamicFormService: DynamicFormsService
  ) { 
    super();
  }
  ngOnInit(): void { }

  public changeComponent() {
    // this.key
    // this.dynamicContent.clear();
    // // create the component factory  
    // const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(SliderComponent);  
    // // add the component to the view  
    // const componentRef = this.dynamicContent.createComponent(dynamicComponentFactory);  
  }

  public addQuestion(): void {
    const indexFieldInGroup = (this.field as any).index ?? 0;
    this.dynamicFormService.updateField({index: indexFieldInGroup, config: this.field});
  }
}
