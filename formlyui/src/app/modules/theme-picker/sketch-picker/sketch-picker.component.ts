import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ColorEvent, RGBA } from 'ngx-color';


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
  actualSaturation = '';
  actualBrightness = '';
  hasWarning = false;
  warningMessage = '';

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

  onChange(event: ColorEvent) {
    const { rgb }         = event.color;
    const maxColor        = Math.max(rgb.r, rgb.g, rgb.b);
    const minColor        = Math.min(rgb.r, rgb.g, rgb.b);
    const brightness      = Math.abs(this.brightnessByColor(rgb));
    const luminosity      = this.calculateLuminosity(maxColor, minColor);
    const saturation      = Math.abs(((maxColor - minColor)/(1 - Math.abs((2 * luminosity) - 1))) * 100);
    this.actualSaturation = saturation.toFixed(2);
    this.actualBrightness = brightness.toFixed(2);
    console.log(this.actualSaturation);
    console.log(this.actualBrightness);
    this.hasWarning = saturation < 70 || brightness < 70;
    if (this.hasWarning) {
      let message = '';
      if (saturation < 70 && brightness < 70) {
        message += `Se recomienda una saturación superior al 70% (ahora ${this.actualSaturation}).`
        message += ` Además, un brillo superior al 70% (ahora ${this.actualBrightness}).`;
      } else if (saturation < 70) {
        message += `Se recomienda una saturación superior al 70% (ahora ${this.actualSaturation}).`
      } else if (brightness < 70) {
        message += `Se recomienda un brillo superior al 70% (ahora ${this.actualBrightness}).`
      }
      this.warningMessage = message;
    } else {
      this.warningMessage = '';
    }
  }

  private calculateLuminosity(maxRgb: number, minRgb: number) {
    // L = (1 / 2) x (Max(RGB) + Min(RGB))
    return (1 / 2) * (maxRgb + minRgb)
  }

  private brightnessByColor (color: RGBA) {
    return ((color.r * 299) + (color.g * 587) + (color.b * 114)) / 1000;
  }
}
