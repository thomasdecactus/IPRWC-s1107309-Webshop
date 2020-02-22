import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductenComponent } from './producten.component';

describe('ProductenComponent', () => {
  let component: ProductenComponent;
  let fixture: ComponentFixture<ProductenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
