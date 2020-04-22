import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HotelsComponent } from './hotels/hotels.component';
import { HotelService } from './hotel.service';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { SchoolsComponent } from './schools/schools.component';
import { ClasssComponent } from './classs/classs.component';
import { AddSchComponent } from './add-sch/add-sch.component';


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
  declarations: [ AppComponent, HotelsComponent, HotelDetailComponent, HotelFormComponent, SchoolsComponent, ClasssComponent, AddSchComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HotelService]
})
export class AppModule { }
