import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatingSystemsComponent } from './operating-systems/operating-systems.component';
import { ProgLanguagesComponent } from './prog-languages/prog-languages.component';
import { DataBasesComponent } from './data-bases/data-bases.component';

const routes: Routes = [
  {path : 'operating-systems', component: OperatingSystemsComponent},
  {path : 'prog-languages' , component: ProgLanguagesComponent},
  {path : 'data-bases' , component: DataBasesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
