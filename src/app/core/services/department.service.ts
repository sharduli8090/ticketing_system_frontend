import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, Department } from '../models/api.model';
import { environment } from '../../../environments/environment';
import { Constants } from '../constant/Constant';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  getAllDept(): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL+Constants.API_ENDPOINT.GET_DEPARTMENT);
  }
  createDept(obj:Department): Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL+Constants.API_ENDPOINT.GET_DEPARTMENT,obj);
  }
  updateDept(obj:Department): Observable<APIResponse> {
    return this.http.put<APIResponse>(environment.API_URL+Constants.API_ENDPOINT.GET_DEPARTMENT,obj);
  }
  deleteDept(id:number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(environment.API_URL+Constants.API_ENDPOINT.GET_DEPARTMENT+id);
  }
}
