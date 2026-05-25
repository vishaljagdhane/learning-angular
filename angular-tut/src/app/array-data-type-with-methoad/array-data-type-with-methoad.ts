import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-array-data-type-with-methoad',
  imports: [CommonModule],
  templateUrl: './array-data-type-with-methoad.html',
  styleUrl: './array-data-type-with-methoad.css',
})
export class ArrayDataTypeWithMethoad {
  NameData: string[] = ['Pure HTML', 'React', 'Angular', 'TypeScript'];
  colors: string[] = ['Red', 'Green', 'Blue'];

  numbers: number[] = [1, 2, 3, 4];
  //  Array mapping method

  ArrayData = this.NameData.map((name) => {
    return 'Course: ' + name;
  });

}
