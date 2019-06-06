import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SberComponent } from './sber.component';

describe('SberComponent', () => {
  let component: SberComponent;
  let fixture: ComponentFixture<SberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
