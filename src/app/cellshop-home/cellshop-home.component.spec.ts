import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellshopHomeComponent } from './cellshop-home.component';

describe('CellshopHomeComponent', () => {
  let component: CellshopHomeComponent;
  let fixture: ComponentFixture<CellshopHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellshopHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellshopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
