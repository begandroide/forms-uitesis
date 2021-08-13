import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KissInputModule } from './kiss-input/kiss-input.module';
import { KissTextareaModule } from './kiss-textarea/kiss-textarea.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KissInputModule,
    KissTextareaModule
  ],
  exports: [
    KissInputModule,
    KissTextareaModule
  ]
})
export class KissComponentsModule { }
