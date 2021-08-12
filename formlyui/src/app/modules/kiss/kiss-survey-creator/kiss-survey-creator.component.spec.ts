import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KissSurveyCreatorComponent } from './kiss-survey-creator.component';

describe('KissSurveyCreatorComponent', () => {
  let component: KissSurveyCreatorComponent;
  let fixture: ComponentFixture<KissSurveyCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KissSurveyCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KissSurveyCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
