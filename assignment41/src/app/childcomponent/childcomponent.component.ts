import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  @Input() public number1:number

  @Input() public number2:number

 public  result:number

    public getResult():number{
   this.result = +this.number1 + +this.number2
     return this.result
    }

    @Output() ResetEvent = new EventEmitter()

    public resetValues()
    {
      this.ResetEvent.emit(false)
    }

  constructor() { }


  ngOnInit() {
  }

}
