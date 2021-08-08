import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantPickerComponent } from './variant-picker.component';

describe('VariantPickerComponent', () => {
  let component: VariantPickerComponent;
  let fixture: ComponentFixture<VariantPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
