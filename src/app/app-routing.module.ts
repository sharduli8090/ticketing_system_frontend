import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Use CanActivate for authorization check
import { LoginEmployeeComponent } from './pages/login-employee/login-employee.component'; // Import your login component
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component'; // Import your admin dashboard component
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';
import { AdminGuard, EmployeeGuard } from './core/guard/auth.guard';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';

export const routes: Routes = [
  { path: 'loginemployee', component: LoginEmployeeComponent },
  {
    path: 'admindash',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard], // Use AdminGuard for authorization check
  },
  {
    path: 'employeedash',
    component: EmployeeDashboardComponent,
    canActivate: [EmployeeGuard], // Use EmployeeGuard for authorization check
  },
  {
    path:'loginadmin',
    component:LoginAdminComponent
  },
  { path: '**', redirectTo: 'loginemployee', pathMatch: 'full' }, // Catch-all for unmatched routes, redirect to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
