import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { employeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-update-employee',
  imports: [FormsModule],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.scss',
})
export class UpdateEmployee implements OnInit{

  employee = signal(new Employee());
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  empService = inject(employeeService);

  ngOnInit(): void {
    this.empService
    .getEmployeeById(this.activatedRoute.snapshot.params['id'])
    .subscribe((data)=>{
      console.log(data);
      this.employee.set(data);
    });
  }

  onSubmit(){
    this.empService
    .updateEmployee(this.activatedRoute.snapshot.params['id'],this.employee())
    .pipe(
      catchError(
        (err)=>{
        throw err;
      }
      )
    )
    .subscribe(
      (data)=>{
        this.router.navigate(['employees']);
      }
    );
  }

}
