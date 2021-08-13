import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KissTextareaComponent } from './kiss-textarea.component';

describe('KissTextareaComponent', () => {
  let component: KissTextareaComponent;
  let fixture: ComponentFixture<KissTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KissTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KissTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
