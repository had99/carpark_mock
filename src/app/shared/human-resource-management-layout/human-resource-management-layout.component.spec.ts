import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourceManagementLayoutComponent } from './human-resource-management-layout.component';

describe('HumanResourceManagementLayoutComponent', () => {
  let component: HumanResourceManagementLayoutComponent;
  let fixture: ComponentFixture<HumanResourceManagementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanResourceManagementLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourceManagementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
