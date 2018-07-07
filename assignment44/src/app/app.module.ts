import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatingSystemsComponent } from './operating-systems/operating-systems.component';
import { ProgLanguagesComponent } from './prog-languages/prog-languages.component';
import { DataBasesComponent } from './data-bases/data-bases.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatingSystemsComponent,
    ProgLanguagesComponent,
    DataBasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
