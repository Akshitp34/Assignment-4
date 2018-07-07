import { Component, OnInit } from '@angular/core';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-bookprices',
  templateUrl: './bookprices.component.html',
  styleUrls: ['./bookprices.component.css']
})
export class BookpricesComponent implements OnInit {
  book = [];

  constructor(public bookserv: BookdataService) { }

  ngOnInit() {
    this.book = this.bookserv.GetBookDetails();
  }

}
