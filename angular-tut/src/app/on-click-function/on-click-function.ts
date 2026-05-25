import { Component } from '@angular/core';

@Component({
  selector: 'app-on-click-function',
  imports: [],
  templateUrl: './on-click-function.html',
  styleUrl: './on-click-function.css',
})
export class OnClickFunction {
  checkfunction() {
    alert('Button Clicked!');
  }
}
