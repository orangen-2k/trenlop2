import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HotelService} from '../hotel.service';


@Component({
  selector: 'app-rooms-detail',
  templateUrl: './rooms-detail.component.html',
  styleUrls: ['./rooms-detail.component.css']
})
export class RoomsDetailComponent implements OnInit {

  hotelData = null;
  constructor(
    private hotelService: HotelService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let hotelId = params.get('hotelId');
      this.hotelService.getHotelById(hotelId).subscribe(data => {
        console.log(data);
        this.hotelData = data;
      })
    })
  }
}