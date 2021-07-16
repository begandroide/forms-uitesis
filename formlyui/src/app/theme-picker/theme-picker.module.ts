import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorCircleModule } from 'ngx-color/circle';
import { ColorPickerComponent, VariantPickerComponent, ThemePickerService } from '.';
import { IconsProviderModule } from '../icons-provider.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    ColorPickerComponent,
    VariantPickerComponent
  ],
  exports: [
    ColorPickerComponent,
    VariantPickerComponent
  ],
  imports: [
    CommonModule,
    NzToolTipModule,
    NzButtonModule,
    ColorCircleModule,
    IconsProviderModule
  ]
})
export class ThemePickerModule { 
  static forRoot(): ModuleWithProviders<ThemePickerModule> {
    return {
      ngModule: ThemePickerModule,
      providers: [
        ThemePickerService
      ]
    }
  }
}
