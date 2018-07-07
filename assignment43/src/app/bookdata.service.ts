import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookdataService {

  constructor() { }

  GetBookDetails() {
  return [
    {'name' : 'abc', 'author' : 'dddddd', 'pages' : 400, 'price' : 299},
    {'name' : 'xyz', 'author' : 'aaaaaa', 'pages' : 698, 'price' : 599},
    {'name' : 'deh', 'author' : 'sdsd', 'pages' : 245, 'price' : 179},
    {'name' : 'ffg', 'author' : 'sdasdasd', 'pages' : 345, 'price' : 350},
        ];
}


}
