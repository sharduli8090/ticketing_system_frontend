import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constants } from '../constant/Constant';
import { Login, APIResponseLogin } from '../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  constructor(private http: HttpClient) {}
  adminLogin(obj: Login): Observable<APIResponseLogin> {
    const response = this.http.post<APIResponseLogin>(
      environment.API_URL + Constants.API_ADMIN_ENDPOINT.ADMIN_LOGIN,
      obj
    );
    response.subscribe((res) => {
      if (res.token && res.id) {
        localStorage.setItem('admintoken', res.token);
        localStorage.setItem('adminid', res.id);
      } else {
        alert('Invalid Credentials');
        localStorage.removeItem('admintoken');
        localStorage.removeItem('adminid');
      }
    });
    return response;
  }

  adminLogout() {
    localStorage.removeItem('admintoken');
    localStorage.removeItem('adminid');
  }
}
