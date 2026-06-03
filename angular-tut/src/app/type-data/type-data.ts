import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-type-data',
  imports: [CommonModule],
  templateUrl: './type-data.html',
  styleUrls: ['./type-data.css'],
})
export class TypeData {
  name: string = 'Hello Angular';
  age: number = 25;
  isAngularFun: boolean = true;
fruits: string[] = ['Apple', 'Banana', 'Orange'];
person: { name: string; age: number; } = { name: 'John', age: 30 };
}
