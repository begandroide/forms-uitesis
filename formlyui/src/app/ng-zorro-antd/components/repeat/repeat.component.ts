import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
import { DynamicFormsService } from '../../services/dynamic-forms.service';

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.scss']
})
export class RepeatComponent extends FieldArrayType implements OnInit {
  constructor(private dynamicFormService: DynamicFormsService) {
    super();
  }
  
  ngOnInit() {
    this.dynamicFormService.onUpdateFields.subscribe((value) => {
      if (Object.keys(value).length > 0) {
        this.addAtIndex(value.index ?? 0);
      }
    });
  }

  addAtIndex(index: number) {
    this.add((index + 1), {markAsDirty: {markAsDirty: true}});
  }

  moveUp(i: number) {
    if (i === 0) {
      return;
    }

    this.reorder(i, i - 1);
  }

  moveDown(i: number) {
    if (i === this.formControl.length - 1) {
      return;
    }

    this.reorder(i, i + 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    this.reorder(event.previousIndex, event.currentIndex);
    // moveItemInArray(this.field.fieldGroup ?? [], event.previousIndex, event.currentIndex);
    // this.field.fieldGroup = [...this.field.fieldGroup ?? []];
  }
  
  private reorder(oldI: number, newI: number) {
    const m = this.model[oldI];
    this.remove(oldI);
    this.add(newI, m);
  }
}
