import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HotelService} from '../hotel.service';


@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(data => {
      console.log(data);
      this.hotels = data;
    });
  }
  
  hotels = [];
  
  removeSchools(School) {
    let conf = confirm("Bạn muốn xóa trường này?");
    if (conf == true) {
      this.hotelService.removeHotelById(School.id).subscribe(data => {
        this.ngOnInit();
      });
    }
  }
    myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
} 