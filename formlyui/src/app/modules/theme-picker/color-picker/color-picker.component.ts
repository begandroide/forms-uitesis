import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { generate } from '@ant-design/colors';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddColors, AppendColor, SetPrimaryColor, SetVariants } from 'src/store/form-theme/form-theme.actions';
import { FormThemeState } from 'src/store/form-theme/form-theme.state';
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
  
  @Select(FormThemeState.getColors) colors$?: Observable<string[]>
  @Select(FormThemeState.getIndexPrimaryColor) selectedIndex$?: Observable<number>

  // colors = Colors;
  generatedColors: string[] = [];
  selectedIndex = 0;
  currentMode: ColorpickerMode = this.Modes.Swatches;
  unsubscribeAll = new Subject();
  constructor(private store: Store) { 
    this.store.dispatch(new AddColors(Colors));
    this.store.dispatch(new SetPrimaryColor(0));
  }
  
  ngOnInit(): void {
    this.generateColors();
    this.selectedIndex$?.pipe(takeUntil(this.unsubscribeAll)).subscribe((index) => {
      this.selectedIndex = index;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  changeToColor(color: string, index: number) {
    if (this.selectedIndex !== index) {
      this.store.dispatch(new SetPrimaryColor(index));
      this.generateColors(color);
    }
  }
  
  private generateColors(hex?: string) {
    this.generatedColors = generate(hex ?? DefaultColor).slice(0, 4);
    this.store.dispatch(new SetVariants(this.generatedColors));
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
      this.store.selectOnce(FormThemeState.getColors).subscribe((colors) => {
        const index = colors.findIndex((p) => p === event);
        if (index === -1) { // not found
          this.store.dispatch(new AppendColor(event));
          this.generateColors(event);
        } else {
          this.generateColors(event);
          this.store.dispatch(new SetPrimaryColor(index));
        }
      });
    }

    this.toggleColorpickerMode();
  }
}
