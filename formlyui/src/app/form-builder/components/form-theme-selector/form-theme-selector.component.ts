import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseSidebarService } from '../sidebar/sidebar.service';
import { blue } from '@ant-design/colors';
@Component({
  selector: 'app-form-theme-selector',
  templateUrl: './form-theme-selector.component.html',
  styleUrls: ['./form-theme-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormThemeSelectorComponent implements OnInit {
  @Input() radioValue = 'default';

  colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"];
  variants: string[] = [];

  constructor(private sidebarService: FuseSidebarService) { }

  ngOnInit(): void {
    console.log(blue); // ['#E6F7FF', '#BAE7FF', '#91D5FF', '#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
    console.log(blue.primary); // '#1890FF'
  }

  closePanel(): void {
    this.sidebarService.getSidebar('theme')?.close();
  }

  onGeneratedColorsChange(event: string[]) {
    this.variants = event;
  }

}
