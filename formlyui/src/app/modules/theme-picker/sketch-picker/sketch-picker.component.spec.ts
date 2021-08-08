import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchPickerComponent } from './sketch-picker.component';

describe('SketchPickerComponent', () => {
  let component: SketchPickerComponent;
  let fixture: ComponentFixture<SketchPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SketchPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
