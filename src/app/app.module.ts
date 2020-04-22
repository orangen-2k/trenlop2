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


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HotelsComponent},
      {path: 'add', component: HotelFormComponent},
      {path: 'detail1/:schoolsId', component: HotelDetailComponent},
      {path: 'edit/:id', component: HotelFormComponent},
    ])
  ],
  declarations: [ AppComponent, HotelsComponent, HotelDetailComponent, HotelFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HotelService]
})
export class AppModule { }
