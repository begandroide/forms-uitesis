import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent, VariantPickerComponent, ThemePickerService } from '.';
import { IconsProviderModule } from '../icons-provider.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { SketchPickerComponent } from './sketch-picker/sketch-picker.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorChromeModule } from 'ngx-color/chrome';
import { LikertPickerComponent } from './likert-picker/likert-picker.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ColorPickerComponent,
    VariantPickerComponent,
    SketchPickerComponent,
    LikertPickerComponent
  ],
  exports: [
    ColorPickerComponent,
    VariantPickerComponent,
    LikertPickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzToolTipModule,
    NzButtonModule,
    NzPopoverModule,
    NzRadioModule,
    ColorSketchModule,
    ColorChromeModule,
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
