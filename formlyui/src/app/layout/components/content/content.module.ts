import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { FooterModule } from '../footer/footer.module';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';



@NgModule({
  declarations: [
    ContentComponent
  ],
  exports: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToolbarModule,
    FooterModule,
  ]
})
export class ContentModule { }
