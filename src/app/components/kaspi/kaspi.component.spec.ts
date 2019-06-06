import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaspiComponent } from './kaspi.component';

describe('KaspiComponent', () => {
  let component: KaspiComponent;
  let fixture: ComponentFixture<KaspiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaspiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaspiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
