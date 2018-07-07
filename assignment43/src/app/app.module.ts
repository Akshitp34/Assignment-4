import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookpricesComponent } from './bookprices/bookprices.component';
import { BookdataService } from './bookdata.service';

@NgModule({
  declarations: [
    AppComponent,
    BookdetailsComponent,
    BooklistComponent,
    BookpricesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
