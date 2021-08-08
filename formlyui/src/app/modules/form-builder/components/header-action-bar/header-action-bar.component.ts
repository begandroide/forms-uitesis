import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseSidebarComponent } from '../sidebar/sidebar.component';
import { FuseSidebarService } from '../sidebar/sidebar.service';

export type ActiveButton = 'Image' | 'Theme' | 'Setting' | undefined;

@Component({
  selector: 'app-header-action-bar',
  templateUrl: './header-action-bar.component.html',
  styleUrls: ['./header-action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HeaderActionBarComponent implements OnInit {

  activeButton: ActiveButton = undefined;

  constructor(
    private sidebarService: FuseSidebarService
  ) { }

  ngOnInit(): void {
  }

  addImage() {
    if (this.getSidebar('theme')?.opened) {
      this.getSidebar('theme')?.toggleOpen();
    }
    
    if (this.getSidebar('setting')?.opened) {
      this.getSidebar('setting')?.toggleOpen();
    }
    const sidebar = this.getSidebar('image');
    sidebar?.toggleOpen();
    if (sidebar?.opened) {
      this.activeButton = 'Image';
    } else {
      this.activeButton = undefined;
    }
  }

  changeTheme() {
    if (this.getSidebar('image')?.opened) {
      this.getSidebar('image')?.toggleOpen();
    }
    
    if (this.getSidebar('setting')?.opened) {
      this.getSidebar('setting')?.toggleOpen();
    }
    
    const sidebar = this.getSidebar('theme');
    sidebar?.toggleOpen();
    if (sidebar?.opened) {
      this.activeButton = 'Theme';
    } else {
      this.activeButton = undefined;
    }
  }

  openSettings() {

    if (this.getSidebar('image')?.opened) {
      this.getSidebar('image')?.toggleOpen();
    }
    
    if (this.getSidebar('theme')?.opened) {
      this.getSidebar('theme')?.toggleOpen();
    }

    const sidebar = this.getSidebar('setting');
    sidebar?.toggleOpen();
    if (sidebar?.opened) {
      this.activeButton = 'Setting';
    } else {
      this.activeButton = undefined;
    }
  }

  private getSidebar(key: string): FuseSidebarComponent | undefined{
    return this.sidebarService.getSidebar(key);
  }
}
