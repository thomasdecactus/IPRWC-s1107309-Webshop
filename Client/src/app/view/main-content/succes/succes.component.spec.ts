import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesComponent } from './succes.component';

describe('SuccesComponent', () => {
  let component: SuccesComponent;
  let fixture: ComponentFixture<SuccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
