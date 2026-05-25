import { Component } from '@angular/core';

@Component({
  selector: 'app-data-type',
  imports: [],
  templateUrl: './data-type.html',
  styleUrl: './data-type.css',
})
export class DataType {

    name: string = 'Vishal';
  age: number = 30;
  isLoggedIn: boolean = true;
}
