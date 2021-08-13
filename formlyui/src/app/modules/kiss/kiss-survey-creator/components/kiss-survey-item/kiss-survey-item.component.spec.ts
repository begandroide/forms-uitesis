import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KissSurveyItemComponent } from './kiss-survey-item.component';

describe('KissSurveyItemComponent', () => {
  let component: KissSurveyItemComponent;
  let fixture: ComponentFixture<KissSurveyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KissSurveyItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KissSurveyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
