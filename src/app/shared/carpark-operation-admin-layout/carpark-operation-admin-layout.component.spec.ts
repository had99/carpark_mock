import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarparkOperationAdminLayoutComponent } from './carpark-operation-admin-layout.component';

describe('CarparkOperationAdminLayoutComponent', () => {
  let component: CarparkOperationAdminLayoutComponent;
  let fixture: ComponentFixture<CarparkOperationAdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarparkOperationAdminLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarparkOperationAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
