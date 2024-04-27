import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cards } from '../../core/models/api.model';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  constructor(private router: Router) {}
  @Input() cards: Cards[] = [];

  navigateToCard(endpoint: string) {
    this.router.navigate([endpoint]);
  }
}
