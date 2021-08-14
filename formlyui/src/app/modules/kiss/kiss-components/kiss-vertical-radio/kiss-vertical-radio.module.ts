import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KissVerticalRadioComponent } from './kiss-vertical-radio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    KissVerticalRadioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzRadioModule,
    IconsProviderModule
  ]
})
export class KissVerticalRadioModule { }
