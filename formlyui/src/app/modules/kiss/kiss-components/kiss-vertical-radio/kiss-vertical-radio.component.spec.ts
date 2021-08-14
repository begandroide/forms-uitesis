import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KissVerticalRadioComponent } from './kiss-vertical-radio.component';

describe('KissVerticalRadioComponent', () => {
  let component: KissVerticalRadioComponent;
  let fixture: ComponentFixture<KissVerticalRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KissVerticalRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KissVerticalRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
