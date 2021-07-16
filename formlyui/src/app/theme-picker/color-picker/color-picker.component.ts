import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { generate, presetPalettes } from '@ant-design/colors';
import { Colors, DefaultColor } from '..';



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
    this.generatedColors = generate(hex ?? DefaultColor).slice(0, 5);
    this.generatedColorsChange.emit(this.generatedColors);
  }

  changeToColorpickerMode() {
    
  }
}
