import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeDetail } from './view-employee-detail';

describe('ViewEmployeeDetail', () => {
  let component: ViewEmployeeDetail;
  let fixture: ComponentFixture<ViewEmployeeDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEmployeeDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
