import { ChangeDetectionStrategy, Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FuseSidebarComponent } from '../sidebar/sidebar.component';
import { FuseSidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-header-action-bar',
  templateUrl: './header-action-bar.component.html',
  styleUrls: ['./header-action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HeaderActionBarComponent implements OnInit {
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
    
    this.getSidebar('image')?.toggleOpen();
  }

  changeTheme() {
    if (this.getSidebar('image')?.opened) {
      this.getSidebar('image')?.toggleOpen();
    }
    
    if (this.getSidebar('setting')?.opened) {
      this.getSidebar('setting')?.toggleOpen();
    }
    
    this.getSidebar('theme')?.toggleOpen();
  }

  openSettings() {

    if (this.getSidebar('image')?.opened) {
      this.getSidebar('image')?.toggleOpen();
    }
    
    if (this.getSidebar('theme')?.opened) {
      this.getSidebar('theme')?.toggleOpen();
    }

    this.getSidebar('setting')?.toggleOpen();
  }

  private getSidebar(key: string): FuseSidebarComponent | undefined{
    return this.sidebarService.getSidebar(key);
  }
}
