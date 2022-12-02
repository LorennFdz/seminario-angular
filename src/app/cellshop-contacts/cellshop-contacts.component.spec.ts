import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellshopContactsComponent } from './cellshop-contacts.component';

describe('CellshopContactsComponent', () => {
  let component: CellshopContactsComponent;
  let fixture: ComponentFixture<CellshopContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellshopContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellshopContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
