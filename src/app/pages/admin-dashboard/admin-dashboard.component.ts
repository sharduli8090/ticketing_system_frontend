import { Component } from '@angular/core';  
import { adminCards } from '../../core/constant/Constant';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent { 
  cards = adminCards; 
}
