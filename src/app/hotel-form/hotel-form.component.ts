import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelService } from '../hotel.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {
  hotelForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    logo: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl('')
  });
  constructor(
    private hotelService: HotelService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params =>{
      let hotelId = params.get('id');
      this.hotelService.getHotelById(hotelId).subscribe(data => {
       this.hotelForm.setValue(data);
      })
    })
  }
  saveHotel(){
    if(this.hotelForm.value.id == null){
      this.hotelService.addNewHotel(this.hotelForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate(['']);
      })
    }else{
      this.hotelService.updateHotel(this.hotelForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate(['']);
      })
    }
    // this.canelSchools();
  }

}