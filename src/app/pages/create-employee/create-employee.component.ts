import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../core/services/admin/admin.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, LoaderComponent],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    empGender: ['', Validators.required],
    empPosition: ['', Validators.required],
    empDepartment: ['', Validators.required],
    empName: ['', Validators.required],
    empDateOfBirth: ['', Validators.required]
  });
  errorMessage: string = '';
  loading: boolean = false; // Variable to control the visibility of the loader

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      empGender: ['', Validators.required],
      empPosition: ['', Validators.required],
      empDepartment: ['', Validators.required],
      empName: ['', Validators.required],
      empDateOfBirth: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loading = true; // Show the loader when data is being fetched
    if (this.employeeForm.invalid) {
      this.errorMessage = 'Please enter valid email and password.';
      return; // Prevent submission if form is invalid
    }
    this.adminService.createEmployee(this.employeeForm.value).subscribe(
      (res) => { 
        console.log(res);
        alert('Employee created successfully'); 
        this.ngOnInit();
        this.loading = false; // Hide the loader when data is fetched
      },
      (err) => {
        console.log(err);
        this.errorMessage = 'Error creating employee';
        this.loading = false; // Hide the loader when data is fetched
      }
    );
  }

  passwordCheck() {
    if (
      this.employeeForm.get('password')?.value !==
      this.employeeForm.get('confirmPassword')?.value
    ) {
      this.errorMessage = 'Passwords do not match';
      return;
    }else{
      this.errorMessage = '';
    }
  }
}
