import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThemeSelectorComponent } from './form-theme-selector.component';

describe('FormThemeSelectorComponent', () => {
  let component: FormThemeSelectorComponent;
  let fixture: ComponentFixture<FormThemeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormThemeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormThemeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
