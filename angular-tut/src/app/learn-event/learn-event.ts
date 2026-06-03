import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-event',
  imports: [],
  templateUrl: './learn-event.html',
  styleUrl: './learn-event.css',
   standalone: true,
})
export class LearnEvent {
  text =""
  ClickButtonEvent() {
    console.log('This ClickButtonEvent function is called when the button is clicked.');
    alert('Button was clicked!, I am an event handler function that responds to the click event.');
  }
  KeyEvent($event:KeyboardEvent) {
    console.log('This KeyEvent function is called when a key is released.');

    this.text = `You released the key: ${$event.key}`;
    alert(`You released the key: ${$event.key}, I am an event handler function that responds to the keyup event.`);
    console.log(this.text);
  }

}
