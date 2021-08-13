import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    path: 'material',
    loadChildren: () => import('./modules/material/material.module').then(m => m.MaterialModule)
  },
  {
    path: 'antd',
    loadChildren: () => import('./modules/ng-zorro-antd/ng-zorro-antd.module').then(m => m.NgZorroAntdModule)
  },
  {
    path: 'form-builder',
    loadChildren: () => import('./modules/form-builder/form-builder.module').then(m => m.FormBuilderModule)
  },
  {
    path: 'kiss-builder',
    loadChildren: () => import('./modules/kiss/kiss.module').then(m => m.KissModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
