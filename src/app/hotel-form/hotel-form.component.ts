import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private hotelService: HotelService,
    private fbuiler: FormBuilder,
    private route: Router,
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params =>{
      let hotelId = params.get('id');
      this.hotelService.getHotelById(hotelId).subscribe(data => {
       this.hotelForm.setValue(data);
      })
    })
  }

    hotelForm = this.fbuiler.group({
    id: new FormControl(null),
    name: ["",[
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+[ a-zA-Z ]*')
    ]],
    logo: ["",[
      Validators.required,
      Validators.maxLength(500),
      Validators.minLength(10),
      Validators.pattern("^(www|http:|https:)+.*")
    ]],
    address: ["",[
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(5),
      Validators.pattern('[0-9a-zA-Z]+[0-9a-zA-Z ]*')
    ]],
    president: ["",[
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+[ a-zA-Z ]*')
    ]],
    province: [null,[
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+[ a-zA-Z ]*')
    ]],
});
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
    this.canelSchools();
  }
canelSchools() {
    this.hotelForm = this.fbuiler.group({
      id: new FormControl(null),
      name: new FormControl(null),
      hotetelId: new FormControl(null),
      room_number: new FormControl(null),
      total_student: new FormControl(null),
      main_teacher: new FormControl(null),
});
  }
  check(value){
    for(let err in value.errors){
          if(value.dirty){
            return this.getError(err, value.errors[err]);
          }
      }
  }

  getError(err, value){
    let messa = {
      'required' : "Không để trống trường dữ liệu",
      'maxlength': `Tối đa là ${value.requiredLength} ký tự`,
      'minlength': `Nhỏ nhất là ${value.requiredLength} ký tự`,
      'pattern': "Sai định dạng"
    }
    return messa[err];
  }

  get schoolname (){
    return this.check(this.hotelForm.controls.name); 
  }

  get schoolpresident (){
    return this.check(this.hotelForm.controls.president); 
  }

  get schoollogo (){
    return this.check(this.hotelForm.controls.logo); 
  }

  get schooladdress (){
    return this.check(this.hotelForm.controls.address); 
  }

  get schoolprovince (){
    return this.check(this.hotelForm.controls.province); 
  }
}