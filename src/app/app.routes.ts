import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DepartmentComponent } from './pages/department/department.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
     {
        path: 'login',
        component: LoginComponent
     },
     {
        path:'',
        children:[
            {
                path: 'department',
                component: DepartmentComponent
            },
            {
                path:'dashboard',
                component: DashboardComponent
            },
            {
                path:'employee',
                component: EmployeeComponent
            },
            {
                path:'tickets',
                component: TicketsComponent
            }
            ,{
                path:'new-ticket',
                component: NewTicketComponent
            }
        ]
     }
];
