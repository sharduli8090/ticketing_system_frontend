import { Component } from '@angular/core';
import { employeeCards } from '../../core/constant/Constant';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent { 
  cards = employeeCards; 
}
