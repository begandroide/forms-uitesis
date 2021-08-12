import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KissSurveyItemComponent } from './kiss-survey-item.component';



@NgModule({
  declarations: [
    KissSurveyItemComponent
  ],
  exports: [
    KissSurveyItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class KissSurveyItemModule { }
