import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Banner } from './banner/banner';
import { Printvalue } from './printvalue/printvalue';
import { DataType } from './data-type/data-type';
import { CallFunction } from './call-function/call-function';
import { GetRunValue } from './get-run-value/get-run-value';
import { LearnEvent } from './learn-event/learn-event';
import { TypeData } from './type-data/type-data';
import { Counter } from './counter/counter';



@Component({
  selector: 'app-root',
  imports: [ Banner,Printvalue,DataType,CallFunction,GetRunValue,LearnEvent,TypeData,Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tut');
  protected readonly SubTitle = signal('Hello, Vishal Welcome to the Angular!');
   name ="Vishal Jagdhane ";
}
