import { Component, OnInit } from '@angular/core';
import {HotelService} from '../hotel.service';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels = [];
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(data => {
      console.log(data);
      this.hotels = data;
    });
  }

}