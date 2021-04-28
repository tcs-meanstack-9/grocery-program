import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateOrderStatusComponent } from './employee-update-order-status.component';

describe('EmployeeUpdateOrderStatusComponent', () => {
  let component: EmployeeUpdateOrderStatusComponent;
  let fixture: ComponentFixture<EmployeeUpdateOrderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUpdateOrderStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUpdateOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
