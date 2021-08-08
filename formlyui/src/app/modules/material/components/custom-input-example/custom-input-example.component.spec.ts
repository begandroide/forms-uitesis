import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputExampleComponent } from './custom-input-example.component';

describe('CustomInputExampleComponent', () => {
  let component: CustomInputExampleComponent;
  let fixture: ComponentFixture<CustomInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomInputExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
