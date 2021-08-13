import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KissSurveySelectorComponent } from './kiss-survey-selector.component';

describe('KissSurveySelectorComponent', () => {
  let component: KissSurveySelectorComponent;
  let fixture: ComponentFixture<KissSurveySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KissSurveySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KissSurveySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
