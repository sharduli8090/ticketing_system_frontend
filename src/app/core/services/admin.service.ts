import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constants } from '../constant/Constant';
import { APIResponse, Employee, TicketApproveDeny } from '../models/api.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  createEmployee(obj: Employee): Observable<APIResponse> {
    const headers = this.authService.getAuthorizationHeaders('admin');
    return this.http.post<APIResponse>(
      environment.API_URL + Constants.API_ADMIN_ENDPOINT.CREATE_EMPLOYEE,
      obj,
      { headers }
    );
  }

  getAllEmployee(): Observable<APIResponse> {
    const headers = this.authService.getAuthorizationHeaders('admin');
    return this.http.get<APIResponse>(
      environment.API_URL + Constants.API_ADMIN_ENDPOINT.GET_ALL_EMPLOYEE,
      { headers }
    );
  }

  getAllTicket(): Observable<APIResponse> {
    const headers = this.authService.getAuthorizationHeaders('admin');
    return this.http.get<APIResponse>(
      environment.API_URL + Constants.API_ADMIN_ENDPOINT.GET_ALL_TICKET,
      { headers }
    );
  }

  deleteAllTicket(): Observable<APIResponse> {
    const headers = this.authService.getAuthorizationHeaders('admin');
    return this.http.delete<APIResponse>(
      environment.API_URL + Constants.API_ADMIN_ENDPOINT.DELETE_ALL_TICKET,
      { headers }
    );
  }

  deleteAllEmployee(): Observable<APIResponse> {
    const headers = this.authService.getAuthorizationHeaders('admin');
    return this.http.delete<APIResponse>(
      environment.API_URL + Constants.API_ADMIN_ENDPOINT.DELETE_ALL_EMPLOYEE,
      { headers }
    );
  }

  deleteEmployee(id: string): Observable<APIResponse> {
    const headers = this.authService.getAuthorizationHeaders('admin');
    return this.http.delete<APIResponse>(
      environment.API_URL + Constants.API_ADMIN_ENDPOINT.DELETE_EMPLOYEE + id,
      { headers }
    );
  }

  deleteTicket(id: string): Observable<APIResponse> {
    const headers = this.authService.getAuthorizationHeaders('admin');
    return this.http.delete<APIResponse>(
      environment.API_URL + Constants.API_ADMIN_ENDPOINT.DELETE_TICKET + id,
      { headers }
    );
  }

  approveDenyTicket(
    obj: TicketApproveDeny,
    ticketId: string
  ): Observable<APIResponse> {
    const headers = this.authService.getAuthorizationHeaders('admin');
    return this.http.put<APIResponse>(
      environment.API_URL +
        Constants.API_ADMIN_ENDPOINT.APPROVE_DENY_TICKET +
        ticketId,
      obj,
      { headers }
    );
  }
}
