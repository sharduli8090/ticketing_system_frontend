import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      const userType = this.authService.getUserType();
      if (userType === 'admin') {
        this.router.navigate(['/admindash']);
      } else if (userType === 'employee') {
        this.router.navigate(['/employeedash']);
      } else {
        // Handle unexpected user type
        console.error('Unexpected user type:', userType);
        this.router.navigate(['/loginemployee']); // Or handle differently
      }
    } else {
      this.router.navigate(['/loginemployee']);
    }
  }
}
