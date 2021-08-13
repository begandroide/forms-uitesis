import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzFormModule,
    NzDividerModule,
    NzButtonModule,
    NzGridModule,
    NzInputModule,
    IconsProviderModule
  ],
  exports:[
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzFormModule,
    NzDividerModule,
    NzButtonModule,    
    NzGridModule,
    NzInputModule,
    IconsProviderModule
  ]
})
export class SharedModule { }
