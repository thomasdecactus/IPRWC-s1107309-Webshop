import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestelComponent } from './bestel.component';

describe('BestelComponent', () => {
  let component: BestelComponent;
  let fixture: ComponentFixture<BestelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
