import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdRoutingModule } from './ng-zorro-antd-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import { FormlyNzCheckboxModule } from '@ngx-formly/ng-zorro-antd/checkbox';
import { FormlyNzInputModule } from '@ngx-formly/ng-zorro-antd/input';
import { FormlyNzRadioModule } from '@ngx-formly/ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgZorroAntdComponent } from './ng-zorro-antd.component';
import { FormlyNzSelectModule } from '@ngx-formly/ng-zorro-antd/select';
import { FormlyNzTextAreaModule } from '@ngx-formly/ng-zorro-antd/textarea';
import { MatSelectModule } from '@angular/material/select';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { SliderComponent } from './components/slider/slider.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { SectionComponent } from './components/section/section.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { HeaderComponent } from './wrappers/header/header.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from '../icons-provider.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [
    NgZorroAntdComponent,
    SliderComponent,
    FormArrayComponent,
    SectionComponent,
    HeaderComponent
  ],
  imports: [
    NgZorroAntdRoutingModule,
    SharedModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      extras: { lazyRender: true }, validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      wrappers: [
        { name: 'header', component: HeaderComponent },
      ],
      types: [
        { name: 'slider', component: SliderComponent, wrappers: ['form-field'] },
        { name: 'formarray', component: FormArrayComponent, wrappers: ['form-field'] },
        { name: 'section', component: SectionComponent, wrappers: ['form-field'] },
        { 
          name: 'section', 
          component: SectionComponent, 
          wrappers: ['form-field'],
        },
        { 
          name: 'header',
          extends: 'formly-group',
          wrappers: ['header'],
          defaultOptions: {
            fieldGroupClassName: 'row',
            templateOptions: {
              label: 'hola'
            },
            fieldGroup: [
              {
                type: 'input', key: 'name',
                templateOptions: { required: true },
                className: 'col-6',
                validation: {
                  messages: {
                    required: 'required',
                  },
                }, 
              },
              { 
                type: 'select',
                key: 'profession',
                className: 'col-6',
                templateOptions: {
                  required: true,
                  options: [
                    { label: 1, value: 1 },
                    { label: 2, value: 2 },
                    { label: 3, value: 3 },
                    { label: 4, value: 4 },
                  ]
                }
              },
            ]
          }
        },
      ],
    }),
    MatSelectModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzSpaceModule,
    NzSliderModule,
    NzDatePickerModule,
    NzInputModule,
    NzToolTipModule,
    IconsProviderModule,
    NzCardModule,
    NzTabsModule,
    FormlyNgZorroAntdModule,
    FormlyNzFormFieldModule,
    FormlyNzCheckboxModule,
    FormlyNzInputModule,
    FormlyNzRadioModule,
    FormlyNzSelectModule,
    FormlyNzTextAreaModule,
  ]
})
export class NgZorroAntdModule { }
