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
        { name: 'custom', component: CustomInputExampleComponent },
      ],
    }),
    FormlyMaterialModule,
    FormlyMatToggleModule,
    FormlyMatSliderModule
  ]
})
export class MaterialModule { }
