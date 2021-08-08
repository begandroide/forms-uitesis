import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZorroAntdComponent } from './ng-zorro-antd.component';

describe('NgZorroAntdComponent', () => {
  let component: NgZorroAntdComponent;
  let fixture: ComponentFixture<NgZorroAntdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgZorroAntdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgZorroAntdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
