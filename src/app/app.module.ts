import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HotelsComponent } from './hotels/hotels.component';
import { HotelService } from './hotel.service';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HotelsComponent},
      {path: 'detail/:hotelId', component: HotelDetailComponent}
    ])
  ],
  declarations: [ AppComponent, HotelsComponent, HotelDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HotelService]
})
export class AppModule { }
