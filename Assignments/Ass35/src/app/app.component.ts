import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public str:string = 'Marvellous Infotech';

  public fun()
  {
    return this.str="Button clicked";
  }
}
