import { Component, OnInit } from '@angular/core';
import { FuseSidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-form-theme-selector',
  templateUrl: './form-theme-selector.component.html',
  styleUrls: ['./form-theme-selector.component.scss']
})
export class FormThemeSelectorComponent implements OnInit {

  constructor(private sidebarService: FuseSidebarService) { }

  ngOnInit(): void {
  }

  closePanel(): void {
    this.sidebarService.getSidebar('theme')?.close();
  }

}
