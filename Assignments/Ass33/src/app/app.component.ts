import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 str:string='hellow';
title = 'app';
  public  fun() 
  {
   return this.str='Marvellous';
  }
}
