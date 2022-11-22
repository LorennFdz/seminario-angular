import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellshopAboutComponent } from './cellshop-about.component';

describe('CellshopAboutComponent', () => {
  let component: CellshopAboutComponent;
  let fixture: ComponentFixture<CellshopAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellshopAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellshopAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
