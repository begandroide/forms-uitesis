import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.field.fieldGroup ?? [], event.previousIndex, event.currentIndex);
    // this.field.fieldGroup = [...this.field.fieldGroup ?? []];
  }
}
