import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent extends FieldType implements OnInit {
  disabled = false;
  value1 = 30;
  value2 = [20, 50];
  formControl!: FormControl;
  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
