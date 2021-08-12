import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KissSurveySelectorComponent } from './kiss-survey-selector.component';



@NgModule({
  declarations: [
    KissSurveySelectorComponent
  ],
  exports: [
    KissSurveySelectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class KissSurveySelectorModule { }
