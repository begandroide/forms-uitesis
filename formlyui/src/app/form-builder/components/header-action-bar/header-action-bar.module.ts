import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HeaderActionBarComponent } from './header-action-bar.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [
    HeaderActionBarComponent
  ],
  exports: [
    HeaderActionBarComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzToolTipModule,
    IconsProviderModule
  ]
})
export class HeaderActionBarModule { }
