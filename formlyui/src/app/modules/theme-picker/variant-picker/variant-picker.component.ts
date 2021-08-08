import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetBackgroundColor } from 'src/store/form-theme/form-theme.actions';
import { FormThemeState } from 'src/store/form-theme/form-theme.state';

@Component({
  selector: 'app-variant-picker',
  templateUrl: './variant-picker.component.html',
  styleUrls: ['./variant-picker.component.scss']
})
export class VariantPickerComponent implements OnInit {
  @Input() selectedIndex: number = -1;

  @Select(FormThemeState.getVariants)
  variants$?: Observable<string[]>;

  @Select(FormThemeState.getIndexBackgroundColor)
  selectedIndex$?: Observable<number>;

  // loadingVariants = true;
  constructor(private store: Store) {
    this.selectedIndex$?.subscribe((value) => {
      this.selectedIndex = value;
    });
  }

  ngOnInit(): void {
    // this.loadingVariants = false;
  }

  changeToVariant(index: number) {
    if (this.selectedIndex !== index) {
      this.store.dispatch(new SetBackgroundColor(index));
    }
  }

}
