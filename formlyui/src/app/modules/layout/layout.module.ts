import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './components/content/content.component';
import { ContentModule } from './components/content/content.module';


@NgModule({
  exports: [
    ContentModule
  ],
  imports: [
    ContentModule
  ]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      // providers: [
      //   {provide: UserServiceConfig, useValue: config }
      // ]
    };
  }
}
