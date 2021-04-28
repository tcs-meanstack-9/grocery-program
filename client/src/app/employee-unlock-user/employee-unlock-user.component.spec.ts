import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUnlockUserComponent } from './employee-unlock-user.component';

describe('EmployeeUnlockUserComponent', () => {
  let component: EmployeeUnlockUserComponent;
  let fixture: ComponentFixture<EmployeeUnlockUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUnlockUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUnlockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
