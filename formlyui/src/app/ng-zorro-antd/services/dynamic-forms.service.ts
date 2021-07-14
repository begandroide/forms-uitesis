import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormsService {
  private _onUpdateFields: BehaviorSubject<FormlyFieldConfig> = new BehaviorSubject({});

  public readonly onUpdateFields: Observable<FormlyFieldConfig> = this._onUpdateFields.asObservable();

  constructor() { }

}
