import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikertPickerComponent } from './likert-picker.component';

describe('LikertPickerComponent', () => {
  let component: LikertPickerComponent;
  let fixture: ComponentFixture<LikertPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikertPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikertPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
