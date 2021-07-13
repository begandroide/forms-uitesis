import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  toggleActive = true;

  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) {

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
