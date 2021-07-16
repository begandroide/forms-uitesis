import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormThemeSelectorComponent } from './form-theme-selector.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ColorCircleModule } from 'ngx-color/circle'; // <color-circle></color-circle>
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemePickerModule } from 'src/app/theme-picker/theme-picker.module';


@NgModule({
  declarations: [
    FormThemeSelectorComponent,
  ],
  exports: [
    FormThemeSelectorComponent
  ],
  imports: [
    CommonModule,
    NzIconModule,
    NzToolTipModule,
    NzButtonModule,
    ColorCircleModule,
    FormsModule,
    NzRadioModule,
    ThemePickerModule.forRoot() // revisar esto
  ]
})
export class FormThemeSelectorModule { }
