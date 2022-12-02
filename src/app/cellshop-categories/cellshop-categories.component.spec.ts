import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellshopCategoriesComponent } from './cellshop-categories.component';

describe('CellshopCategoriesComponent', () => {
  let component: CellshopCategoriesComponent;
  let fixture: ComponentFixture<CellshopCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellshopCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellshopCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
