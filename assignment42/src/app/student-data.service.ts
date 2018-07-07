import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { IStudent } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private http: HttpClient) {


  }

  url = 'src/assets/Data/studentdata.json';

  getData(): Observable<IStudent[]> {
  return this.http.get<IStudent[]>(this.url);
}
}
