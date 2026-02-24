import { Component, inject, OnInit, signal } from '@angular/core';
import { employeeService } from '../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-employee-detail',
  imports: [],
  templateUrl: './view-employee-detail.html',
  styleUrl: './view-employee-detail.scss',
})
export class ViewEmployeeDetail implements OnInit{

  empService = inject(employeeService);
  activatedRoute = inject(ActivatedRoute);
  employee = signal(new Employee);

  ngOnInit(): void {
    this.empService.getEmployeeById(this.activatedRoute.snapshot.params['id'])
    .subscribe(
      (data)=>{
        this.employee.set(data);
      }
    );
  }

}
