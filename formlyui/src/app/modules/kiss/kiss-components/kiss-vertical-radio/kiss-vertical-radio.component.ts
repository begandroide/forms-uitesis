import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { OptionModel } from 'src/app/shared/models';
import { KissControlBaseComponent } from '../kiss-control-base/kiss-control-base.component';

@Component({
  selector: 'app-kiss-vertical-radio',
  templateUrl: './kiss-vertical-radio.component.html',
  styleUrls: ['./kiss-vertical-radio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KissVerticalRadioComponent extends KissControlBaseComponent implements OnInit {

  /** 
   * Options for the radio buttons
   * By default, has one option with editable text value.
   */
  options: OptionModel[] = [{ value: 1, label: 'Escriba la opción 1...' }];

  hasOther: boolean = false;
  focusIndex?: number;

  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onAddOption(input: HTMLInputElement): void {
    this.options.push({ value: this.options.length + 1, label: 'Escriba la opción ' + (this.options.length + 1) + '...' });
    input.blur();
  }

  onAddOtherOption(): void {
    this.options.push({ value: 'Otro', label: 'Otro', extraProperties: { isOther: true } });
    this.hasOther = true;
  }

  removeOptionAtIndex(index: number): void {
    this.options.splice(index, 1);
  }

  onFocus(index: number): void {
    this.focusIndex = index;
  }

  onBlur(): void {
    delete this.focusIndex;
  }

  drop(event: CdkDragDrop<OptionModel>) {
    moveItemInArray(this.options, event.previousIndex, event.currentIndex);
  }
}
