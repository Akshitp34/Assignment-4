import { Component, OnInit } from '@angular/core';
import {IStudent} from './student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentDataService } from './student-data.service';
 // import {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

sdata = [];

constructor(private dataservice: StudentDataService) {
}
showData() {
  this.dataservice.getData().subscribe(data => this.sdata = data);
}

 /* data:  Observable<IStudent[]> ;
  public http: HttpClient;
   _url = 'src/assets/Data/studentdata.json';

  showData() {
    this.data = this.getData();
  }

  getData(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._url);
  }*/
}
