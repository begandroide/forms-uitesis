import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';
import { SharedModule } from '../../shared/shared.module';
import { HeaderActionBarModule } from '../header-action-bar/header-action-bar.module';
import { FuseSidebarModule } from '../sidebar/sidebar.module';



@NgModule({
  declarations: [
    SkeletonComponent
  ],
  exports: [
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderActionBarModule,
    FuseSidebarModule
  ]
})
export class SkeletonModule { }
