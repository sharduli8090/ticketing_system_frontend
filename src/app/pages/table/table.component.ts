import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() data: any[] = [];
  keys: string[] = [];  

  ngOnChanges(): void {
    if (this.data.length > 0) {
      // Assuming all objects in data have the same structure
      this.keys = Object.keys(this.data[0]);
    }
  }
  getDisplayKeys(): string[] {
    return this.keys.filter(key => key !== 'id');
  }
  
}