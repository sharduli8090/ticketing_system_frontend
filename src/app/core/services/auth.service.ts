// src/app/auth.service.ts (or a similar location in your project)

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  getAuthorizationHeaders(userType: 'admin' | 'employee'): HttpHeaders {
    let token = '';
    if (userType === 'admin') {
      token = localStorage.getItem('adminToken') || ''; // Retrieve admin token
    } else {
      token = localStorage.getItem('employeeToken') || ''; // Retrieve emp token
    }
  
    if (!token) {
      throw new Error('Unauthorized: No token found');
    }
  
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Replace these methods with your actual login logic and user type retrieval
  isLoggedIn(): boolean {
    // let token = '';
    // if (localStorage.getItem('adminToken')) {
    //   token = localStorage.getItem('adminToken') || '';
    // } else if (localStorage.getItem('employeeToken')) {
    //   token = localStorage.getItem('employeeToken') || '';
    // }
    // if (!token) {
    //   return false;  
    // }else{
    //   return true;
    // }
    return true;
  }

  getUserType(): string {
    let user = '';
    if (localStorage.getItem('adminToken')) {
      user = "admin";
    } else if (localStorage.getItem('employeeToken')) {
      user = "employee";
    } 
    // Implement your logic to retrieve the user type
    return "admin"; // Replace with your implementation
  }

  // New method for checking authorization based on roles
  isAuthorized(requiredRoles: string[]): Observable<boolean> {
    if (!this.isLoggedIn()) {
      return of(false); // Not logged in, so not authorized
    }

    const userType = this.getUserType();
    return of(requiredRoles.some(role => role === userType)); // Check if user has any of the required roles
  }
}
