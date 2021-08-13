import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KissControlBaseComponent } from './kiss-control-base.component';



@NgModule({
  declarations: [
    KissControlBaseComponent
  ],
  exports: [
    KissControlBaseComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class KissControlBaseModule { }
