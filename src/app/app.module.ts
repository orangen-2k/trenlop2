import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HotelService } from './hotel.service';
import { SchoolsComponent } from './schools/schools.component';
import { ClasssComponent } from './classs/classs.component';
import { AddSchComponent } from './add-sch/add-sch.component';
import { SchoolsService } from './schools.service';


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: SchoolsComponent},
      {path: 'add', component: AddSchComponent},
      {path: 'detail1/:schoolsId', component: ClasssComponent},
      {path: 'edit/:id', component: AddSchComponent},
    ])
  ],
  declarations: [ AppComponent, SchoolsComponent, ClasssComponent, AddSchComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HotelService, SchoolsService]
})
export class AppModule { }
