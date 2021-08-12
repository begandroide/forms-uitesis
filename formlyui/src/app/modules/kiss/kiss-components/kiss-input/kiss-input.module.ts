import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KissInputComponent } from './kiss-input.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    KissInputComponent
  ],
  exports: [
    KissInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    IconsProviderModule
  ]
})
export class KissInputModule { }
