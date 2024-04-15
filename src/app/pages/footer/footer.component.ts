import { Component } from '@angular/core';
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
        if (response.statuscode === 200) {
          alert('Query submitted successfully');
        }

        this.name = '';
        this.query = ''; 
      },
      (error) => {
        alert('Error submitting query');
        console.error('Error sending query:', error); 
      }
    );
  } 
}
