import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDTO } from '../employeeDTO';

@Injectable({
  providedIn: 'root',
})
export class employeeService {

  http = inject(HttpClient);


  getEmployees(){
    return this.http.get<Array<Employee>>("http://localhost:8080/api/v1/employees");
  }

  createEmployee(employee :EmployeeDTO){
    return this.http.post("http://localhost:8080/api/v1/employees",employee);
  }

  getEmployeeById(id:number){
    return this.http.get<Employee>(`http://localhost:8080/api/v1/employees/${id}`);
  }

  updateEmployee(id:number,employee:Employee){
    return this.http.put<Employee>(`http://localhost:8080/api/v1/employees/${id}`,employee)
  }

  deleteEmployee(id:number){
    return this.http.delete(`http://localhost:8080/api/v1/employees/${id}`)
  }
  
}
