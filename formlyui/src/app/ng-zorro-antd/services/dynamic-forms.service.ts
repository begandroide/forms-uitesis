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
  private _onUpdateFields: BehaviorSubject<NewFormlyFieldConfig> = new BehaviorSubject({});

  public readonly onUpdateFields: Observable<NewFormlyFieldConfig> = this._onUpdateFields.asObservable();

  constructor() { }

  public updateField(newItem: NewFormlyFieldConfig) {
    this._onUpdateFields.next(newItem);
  }
}
