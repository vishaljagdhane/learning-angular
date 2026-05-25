import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Banner } from './banner/banner';
import { Printvalue } from './printvalue/printvalue';
import { DataType } from './data-type/data-type';
import { ArrayDataTypeWithMethoad } from './array-data-type-with-methoad/array-data-type-with-methoad';
import { OnClickFunction } from './on-click-function/on-click-function';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Banner, Login, Printvalue,DataType,ArrayDataTypeWithMethoad,OnClickFunction],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tut');
  protected readonly SubTitle = signal('Hello, Vishal Welcome to the Angular!');
   name ="Vishal Jagdhane ";
}
