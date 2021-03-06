import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormBuilderComponent } from './form-builder.component';
import { SkeletonModule } from './components';
import { FuseSidebarModule } from './components/sidebar/sidebar.module';
import { MediaMatcherService } from './shared/services/media-matcher.service';


@NgModule({
  declarations: [
    FormBuilderComponent,
  ],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    SkeletonModule,
    FuseSidebarModule
  ],
  providers: [
    MediaMatcherService
  ]
})
export class FormBuilderModule { }
