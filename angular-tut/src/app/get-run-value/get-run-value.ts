import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-run-value',
  imports: [FormsModule],
  templateUrl: './get-run-value.html',
  styleUrl: './get-run-value.css',
})
export class GetRunValue {
  name: string = '';

  getRunValue() {
    // alert('Value: ' + this.name);
    // console.log('Value: ' + this.name);


  }
}
