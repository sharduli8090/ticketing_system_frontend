import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Constants } from '../../constant/Constant';
import { APIResponse, Close_Ticket, Ticket } from '../../models/api.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  createTicket(obj: Ticket): Observable<APIResponse> {
    const headers = this.authService.getAuthorizationHeaders('employee');
    return this.http.post<APIResponse>(
      environment.API_EMPLOYEE_URL + Constants.API_EMPLOYEE_ENDPOINT.CREATE_TICKET,
      obj,
      { headers }
    );
  }
  closeTicket(obj: Close_Ticket, ticketId: string): Observable<APIResponse> {
    const headers = this.authService.getAuthorizationHeaders('employee');
    return this.http.put<APIResponse>(
      environment.API_EMPLOYEE_URL +
        Constants.API_EMPLOYEE_ENDPOINT.CLOSE_TICKET +
        ticketId,
      obj,
      { headers }
    );
  }
}
