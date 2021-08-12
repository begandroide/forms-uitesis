import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  BgColorsOutline,
  UserOutline,
  PictureOutline,
  SettingOutline,
  InfoCircleOutline,
  PlusOutline
} from '@ant-design/icons-angular/icons';

const icons = [InfoCircleOutline, PlusOutline, MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, BgColorsOutline, UserOutline, PictureOutline, SettingOutline];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
