import { Component } from '@angular/core';
import {CreateEmployeeComponent} from '../create-employee/create-employee.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CreateEmployeeComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
