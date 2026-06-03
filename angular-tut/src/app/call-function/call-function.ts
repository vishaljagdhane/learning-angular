import { Component } from '@angular/core';

@Component({
  selector: 'app-call-function',
  imports: [],
  templateUrl: './call-function.html',
  styleUrl: './call-function.css',
})
export class CallFunction {
  printvalue = 'This is a value from the component!';


  callFunction() {
    alert('Function called successfully!');
    console.log('Function called successfully!');
  }
  testFunction() {
   console.log('This is a test function!');
  }
}
