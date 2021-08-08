import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdComponent } from './ng-zorro-antd.component';

const routes: Routes = [
  {
    path: '',
    component: NgZorroAntdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgZorroAntdRoutingModule { }
