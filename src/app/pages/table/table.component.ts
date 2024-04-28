import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AdminService } from '../../core/services/admin/admin.service';
import { LoaderComponent } from '../loader/loader.component';
import { AllEmployeesComponent } from '../all-employees/all-employees.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, NgIf, LoaderComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() data: any[] = [];
  keys: string[] = [];
  loading: boolean = false;
  constructor(private adminService: AdminService, private getAllEmployees: AllEmployeesComponent) {}

  ngOnChanges(): void {
    if (this.data.length > 0) {
      // Assuming all objects in data have the same structure
      this.keys = Object.keys(this.data[0]);
    }
  }

  getDisplayKeys(): string[] {
    return this.keys.filter((key) => key !== 'id');
  }

  deleteRow(id: string, userType: string): void {
    this.loading = true;
    if (userType === 'ticket') {
      alert('ticket delete called' + ' ' + id);
    } else { 
      this.adminService.deleteEmployee(id).subscribe({
        next: (response) => {
          this.loading = false;
          console.log('Employee deleted:', response);
          alert('Employee deleted successfully');
          this.getAllEmployees.fetchData();
        },
        error: (error) => {
          this.loading = false;
          console.error('Error deleting employee:', error);
        },
      });
    }
  }

  openUpdateModal(row: any): void {
    alert('update called' + ' ' + row);
    // Call a function to open the update modal
    // You can pass the entire row object to the function to populate the modal fields
  }
}
