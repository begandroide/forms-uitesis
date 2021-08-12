import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KissInputModule } from './kiss-input/kiss-input.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KissInputModule
  ],
  exports: [
    KissInputModule
  ]
})
export class KissComponentsModule { }
