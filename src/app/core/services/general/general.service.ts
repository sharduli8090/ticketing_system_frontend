import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Constants } from '../../constant/Constant';
import { APIResponse, Employee, Query } from '../../models/api.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  sendQuery(obj: Query): Observable<APIResponse> {
    const url = `${environment.API_URL}${Constants.API_GENERAL_ENDPOINT.SEND_QUERY}`; 
    return this.http.post<APIResponse>(url, obj).pipe(
      tap((response) => console.log('Query response:', response)), // Handle successful response (optional)
      catchError((error) => {
        console.error('Error sending query:', error);
        return throwError(() => new Error('Error sending query')); // Re-throw for error handling
      })
    );
  }
}
