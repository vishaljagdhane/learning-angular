import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  counter: number = 0;
  addingCounter() {
    // alert('Counter Incremented!');
    this.counter++;
    console.log('Counter Incremented!');
  }
  resetCounter() {
    // alert('Counter Reset!');
    this.counter = 0;
    console.log('Counter Reset!');
  }
  decrementCounter() {
    if (this.counter > 0) {
      this.counter--;
      console.log('Counter Decremented!');
    } else {
      alert('Counter cannot be negative!');
    }
  }


}
