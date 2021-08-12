import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KissSurveyCreatorRoutingModule } from './kiss-survey-creator-routing.module';
import { KissSurveyCreatorComponent } from './kiss-survey-creator.component';
import { KissSurveyItemModule } from './components/kiss-survey-item/kiss-survey-item.module';
import { KissSurveySelectorModule } from './components/kiss-survey-selector/kiss-survey-selector.module';


@NgModule({
  declarations: [
    KissSurveyCreatorComponent
  ],
  imports: [
    CommonModule,
    KissSurveyCreatorRoutingModule,
    KissSurveyItemModule,
    KissSurveySelectorModule
  ]
})
export class KissSurveyCreatorModule { }
