import { Component, OnInit } from '@angular/core';
import {HotelService} from '../hotel.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms = [];
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getRooms().subscribe(data => {
      console.log(data);
      this.rooms = data;
    });
  }

} 