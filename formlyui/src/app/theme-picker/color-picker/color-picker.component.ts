import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent implements OnInit {
  colors = [
    {
      color: "#000",
      selected: true
    },{
      color: "#f44336",
      selected: false
    },{
      color: "#e91e63",
      selected: false
    },{
      color: "#9c27b0",
      selected: false
    },{
      color: "#673ab7",
      selected: false
    },{
      color: "#3f51b5",
      selected: false
    },{
      color: "#2196f3",
      selected: false
    },{
      color: "#03a9f4",
      selected: false
    },{
      color: "#00bcd4",
      selected: false
    },{
      color: "#009688",
      selected: false
    },{
      color: "#4caf50",
      selected: false
    },{
      color: "#8bc34a",
      selected: false
    },{
      color: "#cddc39",
      selected: false
    },{
      color: "#ffeb3b",
      selected: false
    },{
      color: "#ffc107",
      selected: false
    },{
      color: "#ff9800",
      selected: false
    },{
      color: "#ff5722",
      selected: false
    },{
      color: "#795548",
      selected: false
    },{
      color: "#607d8b",
      selected: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
