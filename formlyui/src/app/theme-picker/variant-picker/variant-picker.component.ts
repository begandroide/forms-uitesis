import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { generate } from '@ant-design/colors';
import { DefaultColor } from '../const';

@Component({
  selector: 'app-variant-picker',
  templateUrl: './variant-picker.component.html',
  styleUrls: ['./variant-picker.component.scss']
})
export class VariantPickerComponent implements OnInit {
  @Input() variants: string[];
  @Input() selectedIndex: number;
  @Output() changeVariant: EventEmitter<string>;

  loadingVariants = true;
  constructor() {
    this.changeVariant = new EventEmitter();
    this.variants = [];
    this.selectedIndex = 0;
  }

  ngOnInit(): void {
    if (this.variants.length === 0) {
      this.variants = generate(DefaultColor).slice(0, 5);
    }
    this.loadingVariants = false;
  }

  changeToVariant(index: number) {
    if (this.selectedIndex !== index) {
      this.selectedIndex = index;
    }
  }

}
