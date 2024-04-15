import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Constants } from '../../constant/Constant';
import { Login, APIResponse } from '../../models/api.model';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeLoginService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}
  employeeLogin(obj: Login): Observable<APIResponse> {
    const response = this.http.post<APIResponse>(
      environment.API_URL + Constants.API_EMPLOYEE_ENDPOINT.EMPLOYEE_LOGIN,
      obj
    );
    response.subscribe((res) => {
      if (res.data.token && res.data.id) {
        this.localStorageService.setItem('emptoken', res.data.token);
        this.localStorageService.setItem('empid', res.data.id);
      } else {
        alert('Invalid Credentials');
        this.employeeLogout();
      }
    });
    return response;
  }

  employeeLogout() {
    this.localStorageService.removeItem('emptoken');
    this.localStorageService.removeItem('empid');
  }
}
