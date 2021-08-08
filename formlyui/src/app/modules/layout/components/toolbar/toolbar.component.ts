import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {

  horizontalNavbar!: boolean;
  rightNavbar!: boolean;
  hiddenNavbar!: boolean;
  languages: any;
  navigation: any;
  selectedLanguage: any;
  userStatusOptions!: any[];

  toggleActive = true;

  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    this.toggleActive = !this.toggleActive;
    if (this.toggleActive) {
      this.doc.getElementsByTagName('html').item(0)?.classList.add('dark');
      this.doc.getElementsByTagName('html').item(0)?.classList.remove('bg-white');
    } else {
      this.doc.getElementsByTagName('html').item(0)?.classList.add('bg-white');
      this.doc.getElementsByTagName('html').item(0)?.classList.remove('dark');
    }
  }

}
