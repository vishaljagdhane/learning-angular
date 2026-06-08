import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-condition-comp',
  imports: [CommonModule],
  templateUrl: './condition-comp.html',
  styleUrl: './condition-comp.css',
})
export class ConditionComp {
  isLoggedIn = false; 
  marks = 85;
  ngifCondition = true;
isLogdinUser = false;
messge = "Welcome to Angular Login condition!";

  toggleLogin() {
    alert('Login status will be toggled!');
    this.isLoggedIn = !this.isLoggedIn;
  } 
  hideNgIf(){
    this.ngifCondition = false;
  }
  showNgIf(){
    this.ngifCondition = true;
  }
  toggleUserLogin() {
this.isLogdinUser = !this.isLogdinUser;

if(this.isLogdinUser){
  this.messge = "Welcome to Angular Login condition Your are Login!";
}else{
  this.messge = "Please log in to see the content.";
} 

  }

}
