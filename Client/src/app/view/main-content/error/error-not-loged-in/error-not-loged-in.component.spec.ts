import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNotLogedInComponent } from './error-not-loged-in.component';

describe('ErrorNotLogedInComponent', () => {
  let component: ErrorNotLogedInComponent;
  let fixture: ComponentFixture<ErrorNotLogedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorNotLogedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotLogedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
