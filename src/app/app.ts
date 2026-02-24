import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { EmployeeList } from "./employee-list/employee-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeList, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('employee_management_application');
}
