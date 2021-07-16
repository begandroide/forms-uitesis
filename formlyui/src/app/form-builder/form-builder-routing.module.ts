import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { FormBuilderComponent } from './form-builder.component';

const routes: Routes = [
  {
    path: '',
    component: FormBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule { }
