import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormThemeSelectorComponent } from './form-theme-selector.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';



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
    NzButtonModule
  ]
})
export class FormThemeSelectorModule { }