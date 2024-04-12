import { Component, Query } from '@angular/core';
import { GeneralService } from '../../core/services/general/general.service';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  name: string = '';
  query: string = '';

  constructor(private generalService: GeneralService) {}
  onSubmit() {
    const obj = {
      name: this.name,
      query: this.query,
    };
    this.generalService.sendQuery(obj).subscribe(
      (response) => {
        // this.queryResponse = response;
        console.log('Query response:', response);
        // Handle successful response data here (e.g., display in UI)
      },
      (error) => {
        console.error('Error sending query:', error);
        // Handle errors here (e.g., show error message to user)
      }
    );
  }
  // onSubmit() {
  //   // Call sendQuery function from admin service
  //   console.log("on submit")
  //   const obj = {
  //     "name": this.name,
  //     "query": this.query
  //   };
  //   this.generalService.sendQuery(obj);
  //   this.name = '';
  //   this.query = '';
  // }
}
