import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  public num1:number 
  public num2:number
  message;

  public buttonFlag = false
   public setFlag(val1:number , val2:number)
   {
    this.num1 = val1
     this.num2 = val2
    this.buttonFlag = true;
   }


}
