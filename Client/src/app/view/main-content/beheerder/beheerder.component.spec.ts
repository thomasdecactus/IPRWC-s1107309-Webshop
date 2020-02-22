import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerderComponent } from './beheerder.component';

describe('BeheerderComponent', () => {
  let component: BeheerderComponent;
  let fixture: ComponentFixture<BeheerderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
