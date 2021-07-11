import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputExampleComponent } from './components/custom-input-example/custom-input-example.component';
import { MaterialComponent } from './material.component';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { SharedModule } from '../shared/shared.module';
import { FormlyModule } from '@ngx-formly/core';
import { MaterialRoutingModule } from './material-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { FormlyMatSliderModule } from '@ngx-formly/material/slider';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { FormlyMatCheckboxModule } from '@ngx-formly/material/checkbox';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { FormlyMatMultiCheckboxModule } from '@ngx-formly/material/multicheckbox';
import { FormlyMatRadioModule } from '@ngx-formly/material/radio';
import { FormlyMatSelectModule } from '@ngx-formly/material/select';
import { FormlyMatTextAreaModule } from '@ngx-formly/material/textarea';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    MaterialComponent,
    CustomInputExampleComponent
  ],
  imports: [
    MaterialRoutingModule,
    SharedModule,
    LayoutModule,
    FormlyModule.forChild({
      extras: { lazyRender: true }, validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        { name: 'custom', component: CustomInputExampleComponent, wrappers: ['form-field'] },
      ],
    }),
    MatSelectModule,
    FormlyMaterialModule,
    FormlyMatToggleModule,
    FormlyMatSliderModule,
    FormlyMatFormFieldModule,
    FormlyMatCheckboxModule,
    FormlyMatInputModule,
    FormlyMatMultiCheckboxModule,
    FormlyMatRadioModule,
    FormlyMatSelectModule,
    FormlyMatTextAreaModule,
  ]
})
export class MaterialModule { }
