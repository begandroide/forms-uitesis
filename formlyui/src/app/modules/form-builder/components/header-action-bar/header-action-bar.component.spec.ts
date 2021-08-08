import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderActionBarComponent } from './header-action-bar.component';

describe('HeaderActionBarComponent', () => {
  let component: HeaderActionBarComponent;
  let fixture: ComponentFixture<HeaderActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderActionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
