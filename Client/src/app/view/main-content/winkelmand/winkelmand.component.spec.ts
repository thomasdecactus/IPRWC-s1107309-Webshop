import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkelmandComponent } from './winkelmand.component';

describe('WinkelmandComponent', () => {
  let component: WinkelmandComponent;
  let fixture: ComponentFixture<WinkelmandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkelmandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkelmandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
