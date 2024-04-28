import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Use CanActivate for authorization check
import { LoginEmployeeComponent } from './pages/login-employee/login-employee.component'; // Import your login component
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component'; // Import your admin dashboard component
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';
import {
  AdminGuard,
  EmployeeGuard,
  NoAuthGuard,
} from './core/guard/auth.guard';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { ContactadminComponent } from './pages/contactadmin/contactadmin.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { AllEmployeesComponent } from './pages/all-employees/all-employees.component';
import { AllTicketsComponent } from './pages/all-tickets/all-tickets.component';

export const routes: Routes = [
  { path: 'loginemployee', component: LoginEmployeeComponent },
  {
    path: 'loginadmin',
    component: LoginAdminComponent,
  },
  {
    path: 'admindash',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard], // Use AdminGuard for authorization check
  },
  {
    path: 'createemployee',
    component: CreateEmployeeComponent,
    canActivate: [AdminGuard], // Use AdminGuard for authorization check
  },
  {
    path: 'getallemployee',
    component: AllEmployeesComponent,
    canActivate: [AdminGuard], // Use AdminGuard for authorization check
  },
  {
    path: 'getallticket',
    component: AllTicketsComponent,
    canActivate: [AdminGuard], // Use AdminGuard for authorization check
  },
  {
    path: 'employeedash',
    component: EmployeeDashboardComponent,
    canActivate: [EmployeeGuard], // Use EmployeeGuard for authorization check
  },
  {
    path: 'contactadmin',
    component: ContactadminComponent,
    canActivate: [], // Fix: Assign an empty array to canActivate
  },
  { path: '**', redirectTo: 'loginemployee', pathMatch: 'full' }, // Catch-all for unmatched routes, redirect to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
