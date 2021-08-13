import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KissTextareaComponent } from './kiss-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { IconsProviderModule } from 'src/app/icons-provider.module';



@NgModule({
  declarations: [
    KissTextareaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    IconsProviderModule
  ]
})
export class KissTextareaModule { }
