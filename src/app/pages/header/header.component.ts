import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user: string = 'Admin';
  isUSerAdmin: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  login(): void {
    if (this.isUSerAdmin) {
      this.router.navigate(['/loginemployee']);
      this.user = 'Admin';
      this.isUSerAdmin = false;
    } else {
      this.router.navigate(['/loginadmin']);
      this.user = 'Employee';
      this.isUSerAdmin = true;
    }
  }

  logout(): void {
    // Perform logout action
    // Clear tokens or perform any other necessary tasks
    // Redirect to employee login page after logout
    // Example: this.router.navigate(['/loginemployee']);
    this.authService.logout();
    this.router.navigate(['/loginemployee']);
    this.user = 'Admin';
    this.isUSerAdmin = false;
    this.isLoggedIn();
  }
}
