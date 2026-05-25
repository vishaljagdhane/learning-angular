import { Component } from '@angular/core';

@Component({
  selector: 'app-data-type',
  imports: [],
  templateUrl: './data-type.html',
  styleUrl: './data-type.css',
})
export class DataType {

  // stringdata: string = "Hello Angular!";  this string data type We can also declare and initialize a string variable in one line.
  //  numberDataType :number =42 ; // This is a number data type variable initialized with the value 42.
  // floatDataType: number = 3.14; // This is a floating-point number data type variable initialized with the value 3.14.
  // booleanDataType: boolean = true; // This is a boolean data type variable initialized with the value true.
  // arrayDataType: number[] = [1, 2, 3, 4, 5]; // This is an array data type variable that holds a list of numbers.
  //  arrayDataString :string[] = ["Angular", "TypeScript", "JavaScript"]; // This is an array data type variable that holds a list of strings.
  // tupleDataType: [string, number] = ["Angular", 12]; // This is a tuple data type variable that holds a fixed number of elements of different types.
  // JosnDataType: { name: string; age: number } = { name: "Vishal", age: 30 }; // This is a JSON data type variable that holds an object with properties name and age.
  name: string = 'Vishal';
  age: number = 30;
  isLoggedIn: boolean = true;
  price= 99.99;
}
