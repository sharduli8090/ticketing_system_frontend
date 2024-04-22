import { Inject, Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
  canActivate(): boolean {
    console.log('NoAuthGuard');
    return true; // Always allow access
  }
}

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(@Inject(AuthService) private authService: AuthService) {} // Add the @Inject decorator
  // constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    console.log('AdminGuard');
    return this.authService.isAuthorized(['admin']); // Check for admin role
  }
}

@Injectable({ providedIn: 'root' })
export class EmployeeGuard implements CanActivate {
  constructor(@Inject(AuthService) private authService: AuthService) {} // Add the @Inject decorator

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    console.log('EmployeeGuard');
    return this.authService.isAuthorized(['employee']); // Check for employee role
  }
}

