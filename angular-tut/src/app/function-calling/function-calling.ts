import { Component } from '@angular/core';

@Component({
  selector: 'app-function-calling',
  imports: [],
  templateUrl: './function-calling.html',
  styleUrl: './function-calling.css',
})
export class FunctionCalling {
  message ="I am update on click event";
  started ="I am Arrow function exmaple "

  SimpleFunction(){
 const SimpleData =" I am learning Angular 16.0.0 version and I am loving it!";
 return SimpleData;
//  alert(SimpleData);
  }
  ParameterizedFunction(name:any){
    const parameterizedData =`Hello I am name paramater ${name}`
    return parameterizedData;
  }
  ParameterizedFunctionPassedTwoNumbers(number1:number,number2:number){
    const AddingTwoNumber = number1 + number2;
    return "This Two Number Addition Result is " + AddingTwoNumber;

  }
// SimpleFunction() {
//   return "I am learning Angular 16.0.0 version and I am loving it!";
// }
ArrowFunction = () => {
  return "Hello Angular";
}
OnclickArrrowFunction =()=>{
  this.message = " I am vishal Message updated!";
  return this.started;
}
}
