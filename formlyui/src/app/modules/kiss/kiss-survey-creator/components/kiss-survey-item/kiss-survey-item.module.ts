import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KissSurveyItemComponent } from './kiss-survey-item.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    KissSurveyItemComponent
  ],
  exports: [
    KissSurveyItemComponent
  ],
  imports: [
    SharedModule
  ]
})
export class KissSurveyItemModule { }
