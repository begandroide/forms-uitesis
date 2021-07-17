import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-sketch-picker',
  templateUrl: './sketch-picker.component.html',
  styleUrls: ['./sketch-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SketchPickerComponent implements OnInit {

  @Output() sketchColorChange: EventEmitter<string | null>;

  selectedColor: string | any = "#F17708";
  constructor() { 
    this.sketchColorChange = new EventEmitter();
  }

  ngOnInit(): void {
  }

  add() {
    this.sketchColorChange.emit(this.selectedColor);
  }

  cancel() {
    this.sketchColorChange.emit(null);
  }
}
