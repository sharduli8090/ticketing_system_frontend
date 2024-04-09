import { Component } from '@angular/core';
import { Router } from 'express';
import { AdminLoginService } from '../../core/services/admin-login.service';
import { EmployeeLoginService } from '../../core/services/employee-login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public datacheck: any = {};
  constructor(
    private adminLoginService: AdminLoginService,
    private employeeLoginService: EmployeeLoginService,
    private router: Router
  ) {}

  
}
