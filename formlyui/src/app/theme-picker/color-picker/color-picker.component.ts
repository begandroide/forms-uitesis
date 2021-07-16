import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { generate, presetPalettes } from '@ant-design/colors';

const Colors = [
  "#000000", "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4",
  "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800",
  "#ff5722", "#795548",
];

const DefaultColor = '#000000';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent implements OnInit {
  @Input() selectedColor: string = DefaultColor;
  @Output() generatedColorsChange: EventEmitter<string[]>;
  
  colors = Colors;
  generatedColors: string[] = [];
  selectedIndex = 0;

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
    this.generatedColors = generate(hex ?? DefaultColor);
    this.generatedColorsChange.emit(this.generatedColors);
  }
}
