import { Component, OnInit } from '@angular/core';
import {HotelService} from '../hotel.service';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrls: ['./hotel-rooms.component.css']
})
export class HotelRoomsComponent implements OnInit {

  rooms = [];
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getRooms().subscribe(data => {
      console.log(data);
      this.rooms = data;
    });
  }
 
}