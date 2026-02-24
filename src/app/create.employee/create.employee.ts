import { Component, inject } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { employeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { EmployeeDTO } from '../employeeDTO';

@Component({
  selector: 'app-create.employee',
  imports: [FormsModule],
  templateUrl: './create.employee.html',
  styleUrl: './create.employee.scss',
})
export class CreateEmployee {

  empService = inject(employeeService);
  router = inject(Router);
  employee = new Employee();
  employeeDto = new EmployeeDTO();

  saveEmployee(){
    this.employeeDto.email = this.employee.email;
    this.employeeDto.firstName = this.employee.firstName;
    this.employeeDto.lastName = this.employee.lastName;
    this.empService.createEmployee(this.employeeDto).subscribe(data=>{
      this.gotoEmployeeList();
    }
  );
  }

  gotoEmployeeList(){
      this.router.navigate(['/employees']);
  }

  onSubmit(){
      console.log(this.employee);
      this.saveEmployee();
  }

}
