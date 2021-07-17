import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { generate, presetPalettes } from '@ant-design/colors';
import { ColorEvent } from 'ngx-color';
import { Colors, DefaultColor } from '..';
import { ColorpickerMode } from '../const';



@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent implements OnInit {
  readonly Modes = ColorpickerMode;
  @Input() selectedColor: string = DefaultColor;
  @Output() generatedColorsChange: EventEmitter<string[]>;
  
  colors = Colors;
  generatedColors: string[] = [];
  selectedIndex = 0;
  currentMode: ColorpickerMode = this.Modes.Swatches;

  constructor() { 
    this.generatedColorsChange = new EventEmitter();
  }
  
  ngOnInit(): void {
    this.generateColors(this.selectedColor);
  }

  changeToColor(index: number) {
    if (this.selectedIndex !== index) {
      this.selectedIndex = index;
      this.generateColors(this.colors[index]);
    }
  }
  
  private generateColors(hex?: string) {
    this.generatedColors = generate(hex ?? DefaultColor).slice(0, 4);
    this.generatedColorsChange.emit(this.generatedColors);
  }

  toggleColorpickerMode() {
    if (this.currentMode === this.Modes.Swatches) {
      this.currentMode = this.Modes.Sketch;
    } else {
      this.currentMode = this.Modes.Swatches;
    }
  }

  onSketchColorChange(event: string | null) {
    if (event !== null) {
      const index = this.colors.findIndex((p) => p === event);
      if (index === -1) { // not found
        this.colors.push(event);
        this.generateColors(event);
        this.selectedColor = event;
        this.selectedIndex = this.colors.length - 1;
      } else {
        this.generateColors(event);
        this.selectedColor = event;
        this.selectedIndex = index;
      }
    }

    this.toggleColorpickerMode();
  }
}
