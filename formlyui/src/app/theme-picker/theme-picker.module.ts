import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent, VariantPickerComponent, ThemePickerService } from '.';
import { IconsProviderModule } from '../icons-provider.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { SketchPickerComponent } from './sketch-picker/sketch-picker.component';
import { ColorSketchModule } from 'ngx-color/sketch';


@NgModule({
  declarations: [
    ColorPickerComponent,
    VariantPickerComponent,
    SketchPickerComponent
  ],
  exports: [
    ColorPickerComponent,
    VariantPickerComponent
  ],
  imports: [
    CommonModule,
    NzToolTipModule,
    NzButtonModule,
    NzPopoverModule,
    ColorSketchModule,
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
