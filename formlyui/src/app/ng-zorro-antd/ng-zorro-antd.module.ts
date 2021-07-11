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
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NgZorroAntdComponent
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
    }),
    MatSelectModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzSpaceModule,
    NzDatePickerModule,
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
