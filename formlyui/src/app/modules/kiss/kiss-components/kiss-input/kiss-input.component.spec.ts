import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KissInputComponent } from './kiss-input.component';

describe('KissInputComponent', () => {
  let component: KissInputComponent;
  let fixture: ComponentFixture<KissInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KissInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KissInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
