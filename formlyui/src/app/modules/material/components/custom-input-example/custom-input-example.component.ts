import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/material';

@Component({
  selector: 'app-custom-input-example',
  templateUrl: './custom-input-example.component.html',
  styleUrls: ['./custom-input-example.component.scss']
})
export class CustomInputExampleComponent extends FieldType implements OnInit {
  formControl!: FormControl;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
