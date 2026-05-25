import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Banner } from './banner/banner';
import { Printvalue } from './printvalue/printvalue';
import { DataType } from './data-type/data-type';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Banner, Login, Printvalue,DataType],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tut');
  protected readonly SubTitle = signal('Hello, Vishal Welcome to the Angular!');
   name ="Vishal Jagdhane ";
}
