import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent extends FieldArrayType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
