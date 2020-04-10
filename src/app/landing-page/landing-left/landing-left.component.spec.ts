import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLeftComponent } from './landing-left.component';

describe('LandingLeftComponent', () => {
  let component: LandingLeftComponent;
  let fixture: ComponentFixture<LandingLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
