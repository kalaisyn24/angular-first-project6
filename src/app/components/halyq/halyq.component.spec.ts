import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalyqComponent } from './halyq.component';

describe('HalyqComponent', () => {
  let component: HalyqComponent;
  let fixture: ComponentFixture<HalyqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalyqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalyqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
