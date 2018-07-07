import { Component, OnInit } from '@angular/core';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  book = [];

  constructor(public bookserv: BookdataService) { }

  ngOnInit() {
    this.book = this.bookserv.GetBookDetails();
  }
}
