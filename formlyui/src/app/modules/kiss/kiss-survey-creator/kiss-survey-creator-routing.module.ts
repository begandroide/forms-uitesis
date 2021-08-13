import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KissSurveyCreatorComponent } from './kiss-survey-creator.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'creator'
  },
  {
    path: 'creator',
    component: KissSurveyCreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KissSurveyCreatorRoutingModule { }
