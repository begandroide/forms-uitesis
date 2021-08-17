import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KissInputModule } from './kiss-input/kiss-input.module';
import { KissTextareaModule } from './kiss-textarea/kiss-textarea.module';
import { KissVerticalRadioModule } from './kiss-vertical-radio/kiss-vertical-radio.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KissInputModule,
    KissTextareaModule,
    KissVerticalRadioModule
  ],
  exports: [
    KissInputModule,
    KissTextareaModule,
    KissVerticalRadioModule
  ]
})
export class KissComponentsModule { }
