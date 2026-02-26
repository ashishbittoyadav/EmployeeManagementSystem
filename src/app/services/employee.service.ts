import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDTO } from '../employeeDTO';

@Injectable({
  providedIn: 'root',
})
export class employeeService {

  http = inject(HttpClient);

  private readonly urlPort = 30007 //kubernetes 
  // private urlPort = 8080 // local


  getEmployees(){
    return this.http.get<Array<Employee>>(`http://localhost:${this.urlPort}/api/v1/employees`);
  }

  createEmployee(employee :EmployeeDTO){
    return this.http.post(`http://localhost:${this.urlPort}/api/v1/employees`,employee,{withCredentials: true});
  }

  getEmployeeById(id:number){
    return this.http.get<Employee>(`http://localhost:${this.urlPort}/api/v1/employees/${id}`);
  }

  updateEmployee(id:number,employee:Employee){
    return this.http.put<Employee>(`http://localhost:${this.urlPort}/api/v1/employees/${id}`,employee,{withCredentials: true})
  }

  deleteEmployee(id:number){
    return this.http.delete(`http://localhost:${this.urlPort}/api/v1/employees/${id}`,{withCredentials: true})
  }
  
}
