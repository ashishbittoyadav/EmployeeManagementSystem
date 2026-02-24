import { Component, inject, OnInit, signal } from '@angular/core';
import { Employee } from '../employee';
import { employeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeList implements OnInit{

  employeeService = inject(employeeService);
  employees = signal<Array<Employee>>([]);
  router = inject(Router);

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      (empList)=>{
        this.employees.set(empList);
      }
    )
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id)
    .subscribe((data)=>{
      this.employeeService.getEmployees().subscribe(
        (data)=>{
          this.employees.set(data);
        }
      );
    });
  }

  viewEmployee(id:number){
    this.router.navigate(['employee-detail',id]);
  }

}
