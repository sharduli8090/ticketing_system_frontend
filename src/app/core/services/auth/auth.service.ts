// src/app/auth.service.ts (or a similar location in your project)

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  getAuthorizationHeaders(userType: 'admin' | 'employee'): HttpHeaders {
    let token = '';
    if (userType === 'admin') {
      token = this.localStorageService.getItem('admintoken') || ''; // Retrieve admin token
      // token = localStorage.getItem('adminToken') || ''; // Retrieve admin token
    } else {
      token = this.localStorageService.getItem('emptoken') || ''; // Retrieve employee token
      // token = localStorage.getItem('employeeToken') || ''; // Retrieve employee token
    }

    if (!token) {
      throw new Error('Unauthorized: No token found');
    }

    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Replace these methods with your actual login logic and user type retrieval
  isLoggedIn(): boolean {
    let token = '';
    if (localStorage.getItem('admintoken')) {
      token = localStorage.getItem('admintoken') || '';
    } else if (localStorage.getItem('emptoken')) {
      token = localStorage.getItem('emptoken') || '';
    }
    if (!token) {
      return false;
    }else{
      return true;
    }
    // return false;
  }

  getUserType(): string {
    let user = '';
    if (this.localStorageService.getItem('admintoken')) {
      user = 'admin';
    } else if (this.localStorageService.getItem('emptoken')) {
      user = 'employee';
    }
    // Implement your logic to retrieve the user type
    return user; // Replace with your implementation
  }

  // New method for checking authorization based on roles
  isAuthorized(requiredRoles: string[]): Observable<boolean> {
    if (!this.isLoggedIn()) {
      return of(false); // Not logged in, so not authorized
    }

    const userType = this.getUserType();
    return of(requiredRoles.some((role) => role === userType)); // Check if user has any of the required roles
  }

  logout() {
    this.localStorageService.removeItem('admintoken');
    this.localStorageService.removeItem('adminid');

    this.localStorageService.removeItem('emptoken');
    this.localStorageService.removeItem('empid');
  }
}
