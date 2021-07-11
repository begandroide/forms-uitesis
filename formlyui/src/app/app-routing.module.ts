import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    path: 'material',
    loadChildren: () => import('./material/material.module').then(m => m.MaterialModule)
  },
  {
    path: 'antd',
    loadChildren: () => import('./ng-zorro-antd/ng-zorro-antd.module').then(m => m.NgZorroAntdModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
