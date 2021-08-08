import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface NewFormlyFieldConfig {
  index?: number;
  config?: FormlyFieldConfig
} 

@Injectable({
  providedIn: 'root'
})
export class DynamicFormsService {
  private _onAddField: BehaviorSubject<number> = new BehaviorSubject(-1);
  private _onDeleteField: BehaviorSubject<number> = new BehaviorSubject(-1);

  public readonly onAddField: Observable<number> = this._onAddField.asObservable();
  public readonly onDeleteField: Observable<number> = this._onDeleteField.asObservable();

  constructor() { }

  public addField(index: number) {
    this._onAddField.next(index);
  }

  public deleteField(index: number) {
    this._onDeleteField.next(index);
  }
}
