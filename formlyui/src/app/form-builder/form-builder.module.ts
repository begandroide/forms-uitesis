import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormBuilderComponent } from './form-builder.component';
import { SkeletonModule } from './components/';


@NgModule({
  declarations: [
    FormBuilderComponent,
  ],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    SkeletonModule
  ]
})
export class FormBuilderModule { }
