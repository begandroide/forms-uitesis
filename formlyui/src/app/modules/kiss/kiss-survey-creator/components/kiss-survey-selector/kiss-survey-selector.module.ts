import { NgModule } from '@angular/core';
import { KissSurveySelectorComponent } from './kiss-survey-selector.component';
import { SharedModule } from 'src/app/modules/kiss/kiss-survey-creator/shared/shared.module';

@NgModule({
  declarations: [
    KissSurveySelectorComponent
  ],
  exports: [
    KissSurveySelectorComponent
  ],
  imports: [
    SharedModule
  ]
})
export class KissSurveySelectorModule { }
