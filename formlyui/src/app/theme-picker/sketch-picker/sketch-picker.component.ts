import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-sketch-picker',
  templateUrl: './sketch-picker.component.html',
  styleUrls: ['./sketch-picker.component.scss']
})
export class SketchPickerComponent implements OnInit {

  @Output() sketchColorChange: EventEmitter<ColorEvent>;

  constructor() { 
    this.sketchColorChange = new EventEmitter();
  }

  ngOnInit(): void {
  }

  handleChangeComplete(event: ColorEvent) {
    console.log(event);
  }
}
