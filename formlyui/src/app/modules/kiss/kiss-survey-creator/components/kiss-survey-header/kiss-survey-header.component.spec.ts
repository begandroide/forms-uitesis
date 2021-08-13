import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KissSurveyHeaderComponent } from './kiss-survey-header.component';

describe('KissSurveyHeaderComponent', () => {
  let component: KissSurveyHeaderComponent;
  let fixture: ComponentFixture<KissSurveyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KissSurveyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KissSurveyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
