import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AdminLoginService } from '../../core/services/admin-login/admin-login.service';
import { Router } from '@angular/router';
import { APIResponse, Login } from '../../core/models/api.model';
import { NgIf } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, LoaderComponent],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css',
})
export class LoginAdminComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  errorMessage: string = '';
  loading: boolean = false; // Variable to control the visibility of the loader

  constructor(
    private fb: FormBuilder,
    private loginService: AdminLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.loading = true; // Show the loader when data is being fetched
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please enter valid email and password.';
      return; // Prevent submission if form is invalid
    }

    const loginData: Login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.loginService.adminLogin(loginData).subscribe({
      next: (response: APIResponse) => {
        if (response.statuscode === 200) {
          this.errorMessage = '';

          console.log('Login successful:', response);
          this.loading = false;
          window.location.reload();
          // this.router.navigate(['/admindash']); // Navigate to protected route after successful login
          // console.log('Login successful:', response);
        } else {
          console.error('Login error:', response);
          this.loading = false;
          this.errorMessage = 'Invalid Credentials'; // Handle invalid credentials gracefully
        }

        this.loginForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
        });
      },
      error: (error) => {
        this.loading = false;
        console.error('Login error:', error);
        this.errorMessage = 'An error occurred. Please try again later.'; // Provide generic error message for security
      },
    });
  }
}
