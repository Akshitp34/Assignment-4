import { Component, OnInit } from '@angular/core';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  book = [];

  constructor(public bookserv: BookdataService) { }

  ngOnInit() {
    this.book = this.bookserv.GetBookDetails();
  }

}
