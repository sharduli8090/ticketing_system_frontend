import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../core/services/admin/admin.service';
import { LoaderComponent } from '../loader/loader.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-all-employees',
  standalone: true,
  imports: [TableComponent, NgIf, LoaderComponent, FormsModule],
  templateUrl: './all-employees.component.html',
  styleUrl: './all-employees.component.css',
})
export class AllEmployeesComponent implements OnInit {
  data: any[] = [
    {
      id: 'w-DGKMuzY',
      email: 'manager@gmail.com',
      empName: 'Pakhi Pandey',
      empPosition: 'manager',
      empGender: 'Male',
      empDateOfBirth: '2001-12-22',
      empDateOfJoining: '2024-04-10',
      empNoOfTicketsRaised: 0, 
      empDepartment: 'finance',
    },
    {
      id: 'oRcjZ3Zuu',
      email: 'manager2@gmail.com',
      empName: 'Pakhi Pandey',
      empPosition: 'manager',
      empGender: 'Male',
      empDateOfBirth: '2001-12-22',
      empDateOfJoining: '2024-04-10',
      empNoOfTicketsRaised: 4, 
      empDepartment: 'finance',
    },
    {
      id: 'wx9WwYp-u',
      email: 'manager3@gmail.com',
      empName: 'Pakhi Pandey',
      empPosition: 'manager',
      empGender: 'Male',
      empDateOfBirth: '2001-12-22',
      empDateOfJoining: '2024-04-10',
      empNoOfTicketsRaised: 0, 
      empDepartment: 'it',
    },
    {
      id: '0eJggnXe5',
      email: 'manager4@gmail.com',
      empName: 'Pakhi Pandey',
      empPosition: 'manager',
      empGender: 'Male',
      empDateOfBirth: '2001-12-22',
      empDateOfJoining: '2024-04-10',
      empNoOfTicketsRaised: 0, 
      empDepartment: 'hr',
    },
    {
      id: 'MuueXrtmZ',
      email: 'emp@test.com',
      empName: 'Arijit Paria',
      empPosition: 'manager',
      empGender: 'other',
      empDateOfBirth: '2024-04-04',
      empDateOfJoining: '2024-04-22',
      empNoOfTicketsRaised: 0, 
      empDepartment: 'hr',
    },
  ]; // Variable to store fetched data
  loading: boolean = false; // Variable to control the visibility of the loader
  selectedDepartment: string = 'all'; // Variable to store the selected department

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    // this.fetchData(); // Fetch data on component initialization
  }

  fetchData(): void {
    this.adminService.getAllEmployee().subscribe(
      (response) => {
        this.data = response.data.map((employee: any) => {
          // Create a new object with updated key names
          const updatedEmployee = {
            id: employee.id,
            Email: employee.email,
            Name: employee.empName,
            Designation: employee.empPosition,
            Gender: employee.empGender,
            Date_Of_Birth: employee.empDateOfBirth,
            Date_Of_Joining: employee.empDateOfJoining,
            No_Of_Tickets_Raised: employee.empNoOfTicketsRaised,
            Department: employee.empDepartment,
            // Add more properties as needed
          };
          return updatedEmployee; // Return the modified employee object
        });
        console.log('Data fetched successfully');
        console.log(this.data);
        this.loading = false; // Hide the loader when data is fetched
      },
      (error) => {
        alert('An error occurred while fetching data');
        console.error(error);
        this.loading = false; // Hide the loader if an error occurs
      }
    );
  }

  filterByDepartment(): void {
    if (this.selectedDepartment === 'all') {
      this.fetchData(); // Fetch all data if 'All' is selected
    } else {
      // Call the API to fetch data for the selected department
      this.loading = true; // Show loader while fetching data
      this.adminService
        .getEmployeeDeptWise({ dept: this.selectedDepartment })
        .subscribe(
          (response) => {
            this.data = response.data.map((employee: any) => {
              // Create a new object with updated key names
              const updatedEmployee = {
                id: employee.id,
                Email: employee.email,
                Name: employee.empName,
                Designation: employee.empPosition,
                Gender: employee.empGender,
                Date_Of_Birth: employee.empDateOfBirth,
                Date_Of_Joining: employee.empDateOfJoining,
                No_Of_Tickets_Raised: employee.empNoOfTicketsRaised,
                Department: employee.empDepartment,
                // Add more properties as needed
              };
              return updatedEmployee; // Return the modified employee object
            });
            console.log(
              `Data fetched successfully for department: ${this.selectedDepartment}`
            );
            console.log(this.data);
            this.loading = false; // Hide the loader when data is fetched
          },
          (error) => {
            alert(
              `An error occurred while fetching data for department: ${this.selectedDepartment}`
            );
            console.error(error);
            this.loading = false; // Hide the loader if an error occurs
          }
        );
    }
  }
  deleteAll(): void {
    this.adminService.deleteAllEmployee().subscribe(
      (response) => {
        alert('All employees deleted successfully');
        console.log(response);
        this.data = []; // Clear the data array
      },
      (error) => {
        alert('An error occurred while deleting all employees');
        console.error(error);
      }
    );
  }


}
