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
export class AdminLoginService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}
  adminLogin(obj: Login): Observable<APIResponse> {
    const response = this.http.post<APIResponse>(
      environment.API_URL + Constants.API_ADMIN_ENDPOINT.ADMIN_LOGIN,
      obj
    );
    response.subscribe((res) => {
      if (res.data.token && res.data.id) {
        this.localStorageService.setItem('admintoken', res.data.token);
        this.localStorageService.setItem('adminid', res.data.id);
      } else {
        alert('Invalid Credentials');
        this.adminLogout();
      }
    });
    return response;
  }

  adminLogout() {
    this.localStorageService.removeItem('admintoken');
    this.localStorageService.removeItem('adminid');
  }
}
