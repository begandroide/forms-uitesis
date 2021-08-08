import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzIconModule,
    NzToolTipModule,
    NzTabsModule,
    NzLayoutModule,
    NzSpaceModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    NzIconModule,
    NzToolTipModule,
    NzTabsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzSpaceModule,
  ]
})
export class SharedModule { }
