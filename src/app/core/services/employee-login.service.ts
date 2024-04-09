import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constants } from '../constant/Constant';
import { Login, APIResponseLogin } from '../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeLoginService {
  constructor(private http: HttpClient) {}
  employeeLogin(obj: Login): Observable<APIResponseLogin> {
    const response = this.http.post<APIResponseLogin>(
      environment.API_URL + Constants.API_EMPLOYEE_ENDPOINT.EMPLOYEE_LOGIN,
      obj
    );
    response.subscribe((res) => {
      if (res.token && res.id) {
        localStorage.setItem('emptoken', res.token);
        localStorage.setItem('empid', res.id);
      } else {
        alert('Invalid Credentials');
        localStorage.removeItem('emptoken');
        localStorage.removeItem('empid');
      }
    });
    return response;
  }

  employeeLogout() {
    localStorage.removeItem('emptoken');
    localStorage.removeItem('empid');
  }
}
