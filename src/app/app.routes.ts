import { Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { CreateEmployee } from './create.employee/create.employee';
import { UpdateEmployee } from './update-employee/update-employee';
import { ViewEmployeeDetail } from './view-employee-detail/view-employee-detail';

export const routes: Routes = [
    {path:'employees',component:EmployeeList,},
    {path:'',pathMatch:'full',redirectTo:'employees'},
    {path:'create-employee',component:CreateEmployee},
    {path:'update-employee/:id',component:UpdateEmployee},
    {path:'employee-detail/:id',component:ViewEmployeeDetail}
];
