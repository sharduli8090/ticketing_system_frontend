import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
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
}
