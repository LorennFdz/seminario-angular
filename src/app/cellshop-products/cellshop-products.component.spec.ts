import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellshopProductsComponent } from './cellshop-products.component';

describe('CellshopProductsComponent', () => {
  let component: CellshopProductsComponent;
  let fixture: ComponentFixture<CellshopProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellshopProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellshopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
