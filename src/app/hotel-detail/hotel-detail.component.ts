import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HotelService } from "../hotel.service";

@Component({
  selector: "app-hotel-detail",
  templateUrl: "./hotel-detail.component.html",
  styleUrls: ["./hotel-detail.component.css"]
})
export class HotelDetailComponent implements OnInit {
  hotelData = null;
  constructor(
    private hotelService: HotelService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let schoolsId = params.get("schoolsId");
      this.hotelService.getHotelById(schoolsId).subscribe(data => {
        console.log(data);
        this.hotelData = data;
      });
    });
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
